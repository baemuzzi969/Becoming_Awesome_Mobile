import React from "react";

const Event: React.FC = () => {
  return (
    <div className="mt-4 overflow-y-auto pb-12">
      <>
        <div className="text-base font-bold text-[#282828]">
          Upcoming events that you can join
        </div>
        <div className="bg-[#F2F2F2] rounded-2xl p-3 mt-4">
          <div className="flex flex-row w-full items-center gap-2 ">
            <img src="/assets/icon/calendar.png" alt="calendar" />
            <div className="text-base font-medium font-roboto">Today</div>
          </div>
          <div className="ml-[6px] mt-2 text-sm font-normal text-[#282828]">
            Announcement title here
          </div>
          <div className="ml-[6px] mt-1 text-xs font-normal text-[#585858]">
            Details here
          </div>
        </div>
      </>
      <>
        <div className="bg-[#F2F2F2] rounded-2xl p-3 mt-4">
          <div className="flex flex-row w-full items-center gap-2 ">
            <img src="/assets/icon/calendar.png" alt="calendar" />
            <div className="text-base font-medium font-roboto">Today</div>
          </div>
          <div className="ml-[6px] mt-2 text-sm font-normal text-[#282828]">
            Announcement title here
          </div>
          <div className="ml-[6px] mt-1 text-xs font-normal text-[#585858]">
            Details here
          </div>
        </div>
      </>
      <>
        <div className="bg-[#F2F2F2] rounded-2xl p-3 mt-4">
          <div className="flex flex-row w-full items-center gap-2 ">
            <img src="/assets/icon/calendar.png" alt="calendar" />
            <div className="text-base font-medium font-roboto">Today</div>
          </div>
          <div className="ml-[6px] mt-2 text-sm font-normal text-[#282828]">
            Announcement title here
          </div>
          <div className="ml-[6px] mt-1 text-xs font-normal text-[#585858]">
            Details here
          </div>
        </div>
      </>
    </div>
  );
};

export default Event;
