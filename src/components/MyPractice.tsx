import React, { useState } from "react";
import { useIonRouter } from "@ionic/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type MyPracticeKind = "lesson" | "assessment" | "music" | "bookmark";

interface MyPracticeProps {
  kind?: MyPracticeKind;
}

const MyPractice: React.FC<MyPracticeProps> = ({ kind }) => {
  const router = useIonRouter();
  const [iconValue, setIconValue] = useState(kind);

  const videos = [
    { title: "Activation Process", time: "Tomorrow 5 pm" },
    { title: "Celebrate like a Kid", time: "Tomorrow 6 pm" },
    { title: "Morning Routine", time: "Tomorrow 7 am" },
    { title: "Mindful Practice", time: "Tomorrow 8 am" },
  ];

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    arrows: true,
  };

  const titleMap: Record<MyPracticeKind, string> = {
    lesson: "Lessons",
    assessment: "Assessments",
    music: "Music",
    bookmark: "Bookmarks",
  };

  const title = kind ? titleMap[kind] : "MyPractice";

  const handleTitleClick = () => {
    if (kind === "lesson") {
      router.push("/tabs/mystuff/lessons", "forward", "push");
    } else if (kind === "assessment") {
      router.push("/tabs/mystuff/assessment", "forward", "push");
    }
    // Add navigation for other kinds if needed
  };

  return (
    <div className="pt-3">
      <button
        type="button"
        onClick={handleTitleClick}
        className="flex flex-row items-center gap-3"
      >
        <div className="text-base font-bold font-roboto text-[#282828]">
          {title}
        </div>
        <img
          src="/assets/icon/vector.png"
          alt="vector"
          className="w-2 h-3 mt-1"
        />
      </button>
      <Slider {...settings}>
        {videos.map((video, idx) => (
          <div key={idx} className="px-1 mt-5">
            <div className="rounded-xl bg-[#4C1534] text-white">
              <div className="h-[120px] w-[170px] rounded-xl mb-2"></div>
            </div>
            <div className="flex items-center gap-2 text-sm ml-1">
              {iconValue == "assessment" ? (
                <img src="/assets/icon/lock.png" alt="lock" />
              ) : (
                <img src="/assets/icon/video.png" alt="video" />
              )}
              <span className="text-[13px] font-bold text-[#282828] font-roboto">
                {video.title}
              </span>
            </div>
            <p className="text-xs font-normal text-[#282828] font-roboto ml-1">
              {video.time}
            </p>
            <p className="text-[11px] font-normal text-[#585858] font-roboto ml-1">
              Lesson details here
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyPractice;
