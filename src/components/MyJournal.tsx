import React from "react";

const MyJournal: React.FC = () => {
  return (
    <div className="pt-3">
      <div className="flex flex-row items-center gap-3">
        <div className="text-base font-bold font-roboto text-[#282828]">
          My Journal
        </div>
        <img
          src="/assets/icon/vector.png"
          alt="vector"
          className="w-2 h-3 mt-1"
        />
      </div>
      <div className="flex flex-row items-center gap-3 mt-3">
        <div className="text-base font-bold font-roboto text-[#282828]">
          All Journals
        </div>
        <img
          src="/assets/icon/vector.png"
          alt="vector"
          className="w-2 h-3 mt-1 rotate-90"
        />
      </div>
      <div className="mt-2">
        <div className="flex flex-col bg-[#F2F2F2] rounded-2xl w-full h-fit p-3">
          <div className="flex flex-row justify-between">
            <div className="text-[#282828] font-medium font-roboto text-lg">
              Title here
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="text-sm font-normal font-roboto text-white px-2 py-[2px] bg-[#8E185A] rounded-2xl">
                Lesson Prompts
              </div>
              <img
                src="/assets/icon/bookmark.png"
                alt="bookmark"
                className="h-4"
              />
              <img
                src="/assets/icon/download.png"
                alt="download"
                className="h-4"
              />
            </div>
          </div>
          <div className="mt-2 text-[#282828] font-normal font-roboto text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
          <div className="mt-2 text-[#585858] text-sm font-normal font-roboto">
            June 27, 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJournal;
