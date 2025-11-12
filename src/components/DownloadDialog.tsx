import React, { useEffect, useState } from "react";

type DownloadOption = "video" | "transcript" | "both";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onDownload?: (option: DownloadOption) => void;
};

const DownloadDialog: React.FC<Props> = ({ isOpen, onClose, onDownload }) => {
  const [selected, setSelected] = useState<DownloadOption>("both");
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setAnimateIn(false);
      return;
    }
    const id = window.setTimeout(() => setAnimateIn(true), 0);
    return () => {
      window.clearTimeout(id);
      setAnimateIn(false);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const ANIM_MS = 300;

  const closeWithAnimation = (after?: () => void) => {
    setAnimateIn(false);
    window.setTimeout(() => {
      after?.();
      onClose();
    }, ANIM_MS);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeWithAnimation();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
      onClick={handleBackdropClick}
    >
      <div
        className={`w-full max-w-[430px] mx-auto bg-white rounded-t-2xl h-[250px] transform transition-transform duration-300 ${
          animateIn ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          <div className="px-6 pt-4 pb-3 text-xl font-bold text-[#282828] font-roboto">
            Download
          </div>
          <div className="border-t border-[#A9A9A9]" />
          <div className="flex-1 px-6 py-4 flex flex-col gap-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="download"
                checked={selected === "video"}
                onChange={() => setSelected("video")}
                className="w-6 h-6 accent-[#282828]"
              />
              <span className="text-base text-[#282828] font-roboto font-normal">
                Video
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="download"
                checked={selected === "transcript"}
                onChange={() => setSelected("transcript")}
                className="w-6 h-6 accent-[#282828]"
              />
              <span className="text-base text-[#282828] font-roboto font-normal">
                Transcript
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="download"
                checked={selected === "both"}
                onChange={() => setSelected("both")}
                className="w-6 h-6 accent-[#282828]"
              />
              <span className="text-base text-[#282828] font-roboto font-normal">
                Video and Transcript
              </span>
            </label>
          </div>
          <div className="border-t border-[#A9A9A9]" />
          <div className="flex-1 flex flex-row w-full">
            <button
              type="button"
              onClick={() => closeWithAnimation()}
              className="flex w-1/2 items-center justify-center text-base text-center text-[#282828] font-roboto font-semibold"
            >
              Cancel
            </button>
            <div className="flex h-full border-r border-[#A9A9A9]"></div>
            <button
              type="button"
              onClick={() => closeWithAnimation(() => onDownload?.(selected))}
              className="flex w-1/2 items-center justify-center text-base text-center text-[#282828] font-roboto font-semibold"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadDialog;
