import React, { useState } from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";

type DownloadItem = {
  id: string;
  title: string;
  timestamp: string;
  details: string;
  thumbnail: string;
};

const Downloads: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sample data - replace with actual data from your backend
  const downloadItems: DownloadItem[] = [
    {
      id: "1",
      title: "Celebrate like a kid",
      timestamp: "Today 8-pm",
      details: "Lesson details here",
      thumbnail: "/assets/img/welcome-poster.jpg",
    },
    {
      id: "2",
      title: "Celebrate like a kid",
      timestamp: "Today 8-pm",
      details: "Lesson details here",
      thumbnail: "/assets/img/welcome-poster.jpg",
    },
    {
      id: "3",
      title: "Celebrate like a kid",
      timestamp: "Today 8-pm",
      details: "Lesson details here",
      thumbnail: "/assets/img/welcome-poster.jpg",
    },
    {
      id: "4",
      title: "Celebrate like a kid",
      timestamp: "Today 8-pm",
      details: "Lesson details here",
      thumbnail: "/assets/img/welcome-poster.jpg",
    },
  ];

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] h-full mx-auto pt-16 px-6 overflow-y-auto relative">
          <div className="flex h-12 text-2xl font-bold font-robotoBold text-[#282828] items-center">
            Downloads
          </div>
          <div className="flex flex-col mt-3 py-3 px-4 gap-2 border border-[#A9A9A9] rounded-lg">
            <div className="text-base font-normal font-robotoNormal text-[#282828]">
              Sample User
            </div>
            <div className="text-xs font-normal font-robotoNormal text-[#585858]">
              Sampleuser@email.com
            </div>
          </div>

          <div className="flex flex-row justify-end items-center pt-3">
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-xl transition-colors ${
                  viewMode === "grid" ? "bg-[#F2F2F2]" : "bg-transparent"
                }`}
                aria-label="Grid view"
              >
                <img src="/assets/icon/grid.png" alt="grid" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`p-[2px] rounded-xl transition-colors ${
                  viewMode === "list" ? "bg-[#F2F2F2]" : "bg-transparent"
                }`}
                aria-label="List view"
              >
                <img src="/assets/icon/list.png" alt="list" />
              </button>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 gap-4">
              {downloadItems.map((downloadItem, idx) => (
                <div key={idx} className="px-1 mt-5">
                  <div className="rounded-xl bg-[#4C1534] text-white">
                    <div className="h-[120px] w-[170px] rounded-xl mb-2"></div>
                  </div>
                  <div className="flex items-center gap-2 text-sm ml-1">
                    <img src="/assets/icon/video.png" alt="video" />

                    <span className="text-[13px] font-bold text-[#282828] font-robotoBold">
                      {downloadItem.title}
                    </span>
                  </div>
                  <p className="text-xs font-normal font-robotoNormal text-[#282828] ml-1">
                    {downloadItem.timestamp}
                  </p>
                  <p className="text-[11px] font-normal font-robotoNormal text-[#585858] ml-1">
                    Lesson details here
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col mt-4">
              {downloadItems.map((downloadItem, index) => (
                <button
                  key={downloadItem.id}
                  type="button"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
                >
                  <div className="w-6 h-6 rounded-[4px] bg-[#4A0F28] shrink-0" />
                  <div className="flex flex-row justify-between w-full items-center">
                    <div className="text-xs font-normal font-robotoNormal text-[#282828]">
                      {downloadItem.title}
                    </div>
                    <div className="text-xs font-normal font-robotoNormal text-[#282828]">
                      Details
                    </div>
                    <div className="text-xs font-normal font-robotoNormal text-[#282828] font-robotos">
                      {downloadItem.timestamp || "10:15 mins"}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Downloads;
