import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  title?: string;
  poster?: string;
  onClose?: () => void;
};

const formatTime = (s: number) => {
  if (!isFinite(s)) return "0:00";
  const minutes = Math.floor(s / 60);
  const seconds = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const CustomVideoPlayer: React.FC<Props> = ({
  src,
  title,
  poster,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [bufferedEnd, setBufferedEnd] = useState(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoaded = () => setDuration(v.duration || 0);
    const onTime = () => setCurrentTime(v.currentTime || 0);
    const onProgress = () => {
      try {
        const b = v.buffered;
        if (b.length) {
          const end = b.end(b.length - 1);
          setBufferedEnd(end);
        }
      } catch (e) {
        // ignore
      }
    };

    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("progress", onProgress);

    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("progress", onProgress);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const handleSeek = (value: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = value;
    setCurrentTime(value);
  };

  const skip = (sec: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + sec));
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const changeVolume = (val: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = val;
    setVolume(val);
    if (val > 0) {
      v.muted = false;
      setMuted(false);
    }
  };

  const seekByClientX = (clientX: number, rect: DOMRect) => {
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const time = (videoRef.current?.duration || duration || 0) * pct;
    handleSeek(time);
  };

  const onPointerStart = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = progressRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setSeeking(true);
    seekByClientX(clientX, rect);

    const move = (ev: any) => {
      const cx = ev.touches ? ev.touches[0].clientX : ev.clientX;
      seekByClientX(cx, rect);
    };

    const up = () => {
      setSeeking(false);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("touchend", up);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move, { passive: false } as any);
    document.addEventListener("mouseup", up);
    document.addEventListener("touchend", up);
  };

  const toggleFullscreen = async () => {
    const el = videoRef.current as any;
    if (!el) return;
    const container = el.parentElement;
    if (!container) return;
    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch (e) {
      // ignore
    }
  };

  const download = () => {
    const a = document.createElement("a");
    a.href = src;
    a.download = src.split("/").pop() || "video.mp4";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-black text-white">
      <div className="flex-shrink-0 p-4">
        <div className="flex flex-row justify-between items-center mt-11">
          <button onClick={() => onClose?.()} className="p-2 invisible">
            Close
          </button>
          <div className="w-[100px] h-5 bg-[#D9D9D9] rounded"></div>
          <button onClick={() => onClose?.()} className="p-2">
            Close
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full max-h-[60vh] object-contain"
          onClick={togglePlay}
        />
      </div>

      <div className="p-4">
        <div className="flex flex-row justify-end gap-3">
          <button onClick={toggleMute}>
            <img src="/assets/icon/sound.png" alt="sound" />
          </button>
          <button>
            <img src="/assets/icon/chat-video.png" alt="chat" />
          </button>
          <button onClick={toggleFullscreen}>
            <img src="/assets/icon/fullscreen-video.png" alt="more" />
          </button>
          <button>
            <img src="/assets/icon/more.png" alt="more" />
          </button>
        </div>
        <div className="flex items-center mb-3">
          <div className="flex-1">
            <div
              ref={progressRef}
              onMouseDown={onPointerStart as any}
              onTouchStart={onPointerStart as any}
              className="relative h-1 bg-white/20 rounded-md w-full cursor-pointer"
            >
              <div
                className="absolute left-0 top-0 h-1 bg-white/20 rounded-md"
                style={{
                  width: `${duration ? (bufferedEnd / duration) * 100 : 0}%`,
                }}
              />

              <div
                className="absolute left-0 top-0 h-1 bg-white rounded-md"
                style={{
                  width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                }}
              />
            </div>

            <div className="flex justify-between text-xs font-medium font-roboto text-white opacity-80 mt-2">
              <div>{formatTime(currentTime)}</div>
              <div>{formatTime(duration)}</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start">
          <div className="text-xs font-bold font-roboto text-white">
            {title || ""}
          </div>
          <div className="text-xs font-normal font-roboto text-white">
            Lesson details here
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-9">
          <button onClick={() => skip(-15)}>
            <img src="/assets/icon/back-forward.png" alt="back-forward" />
          </button>
          <button onClick={togglePlay}>
            {playing ? (
              <img src="/assets/icon/play.png" alt="play" />
            ) : (
              <img src="/assets/icon/pause.png" alt="pause" />
            )}
          </button>
          <button onClick={() => skip(15)}>
            <img src="/assets/icon/go-forward.png" alt="go-forward" />
          </button>
        </div>

        <div className="mt-4 flex flex-row justify-between items-center text-center">
          <div className="flex flex-col items-center">
            <img
              src="/assets/icon/vector-video.png"
              alt="vector"
              className="w-6 h-6"
            />
            <div className="text-white text-[10px] font-normal font-roboto mt-2">
              Journal
            </div>
          </div>
          <div className="flex flex-col items-center" onClick={download}>
            <img
              src="/assets/icon/download-video.png"
              alt="download"
              className="w-6 h-6"
            />
            <span className="text-white text-[10px] font-normal font-roboto mt-2">
              Download
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/icon/star.png"
              alt="star"
              className="w-[26px] h-[26px]"
            />
            <div className="text-white text-[10px] font-normal font-roboto mt-2">
              MyPractice
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/icon/send-video.png"
              alt="send"
              className="w-6 h-6"
            />
            <div className="text-white text-[10px] font-normal font-roboto mt-2">
              Feedback
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/icon/bookmark-video.png"
              alt="bookmark"
              className="w-6 h-6"
            />
            <div className="text-white text-[10px] font-normal font-roboto mt-2">
              Bookmark
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
