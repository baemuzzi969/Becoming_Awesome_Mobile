import React, { useState } from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import NotificationBell from "../../components/NotificationBell";

type ViewMode = "grid" | "list";

interface Bookmarks {
  id: string;
  title: string;
  time: string;
  details: string;
  duration?: string;
}

const BookMarks: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const bookmarks: Bookmarks[] = [
    {
      id: "1",
      title: "Celebrate like a kid",
      time: "Today 8-pm",
      details: "Lesson details here",
    },
    {
      id: "2",
      title: "Celebrate like a kid",
      time: "Today 8-pm",
      details: "Lesson details here",
    },
    {
      id: "3",
      title: "Celebrate like a kid",
      time: "Today 8-pm",
      details: "Lesson details here",
    },
    {
      id: "4",
      title: "Celebrate like a kid",
      time: "Today 8-pm",
      details: "Lesson details here",
    },
  ];

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] h-full mx-auto pt-16 overflow-y-auto relative">
          <Header />

          <div className="flex flex-row w-full justify-between items-center px-6">
            <div className="text-2xl font-bold text-[#282828] font-robotoBold">
              Ascension App
            </div>
            <NotificationBell count={1} />
          </div>

          <div className="bg-white mt-6 px-6 w-full h-full pb-12">
            <div className="flex flex-row justify-between items-center pt-2">
              <div className="text-[#282828] text-base font-bold font-robotoBold">
                BookMarks
              </div>
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
                {bookmarks.map((bookmark, idx) => (
                  <div key={idx} className="px-1 mt-5">
                    <div className="rounded-xl bg-[#4C1534] text-white">
                      <div className="h-[120px] w-[170px] rounded-xl mb-2"></div>
                    </div>
                    <div className="flex items-center gap-2 text-sm ml-1">
                      <img src="/assets/icon/video.png" alt="video" />

                      <span className="text-[13px] font-bold text-[#282828] font-robotoBold">
                        {bookmark.title}
                      </span>
                    </div>
                    <p className="text-xs font-normal font-robotoNormal text-[#282828] ml-1">
                      {bookmark.time}
                    </p>
                    <p className="text-[11px] font-normal font-robotoNormal text-[#585858] ml-1">
                      Lesson details here
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col mt-4">
                {bookmarks.map((bookmark, index) => (
                  <button
                    key={bookmark.id}
                    type="button"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="w-6 h-6 rounded-[4px] bg-[#4A0F28] shrink-0" />
                    <div className="flex flex-row justify-between w-full items-center">
                      <div className="text-xs font-normal font-robotoNormal text-[#282828]">
                        Bookmark {index + 1} - Title here
                      </div>
                      <div className="text-xs font-normal font-robotoNormal text-[#282828]">
                        Details
                      </div>
                      <div className="text-xs font-normal font-robotoNormal text-[#282828] font-robotos">
                        {bookmark.duration || "10:15 mins"}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BookMarks;
