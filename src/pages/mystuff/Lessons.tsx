import React, { useState } from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import NotificationBell from "../../components/NotificationBell";

type ViewMode = "grid" | "list";
type FilterTab =
  | "all"
  | "module1"
  | "module2"
  | "module3"
  | "module4"
  | "module5";

interface Lesson {
  id: string;
  title: string;
  time: string;
  details: string;
  duration?: string;
}

const Lessons: React.FC = () => {
  const router = useIonRouter();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const lessons: Lesson[] = [
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

  const filters: { id: FilterTab; label: string }[] = [
    { id: "all", label: "All lessons" },
    { id: "module1", label: "Module 1" },
    { id: "module2", label: "Module 2" },
    { id: "module3", label: "Module 3" },
    { id: "module4", label: "Module 4" },
    { id: "module5", label: "Module 5" },
  ];

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] h-full mx-auto pt-16 overflow-y-auto relative">
          <Header />

          <div className="flex flex-row w-full justify-between items-center px-6">
            <div className="text-2xl font-bold text-[#282828] font-roboto">
              Ascension App
            </div>
            <NotificationBell count={1} />
          </div>

          <div className="bg-white mt-6 px-6 w-full h-full pb-12">
            <div className="flex flex-row justify-between items-center pt-2">
              <div className="text-[#282828] text-base font-bold font-roboto">
                Lessons
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

            <div className="flex gap-1 overflow-x-auto mt-4 pb-2 hide-scrollbar">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-2 py-2 rounded-lg text-sm font-bold font-roboto whitespace-nowrap transition-colors shrink-0 ${
                    activeFilter === filter.id
                      ? "bg-[#F2F2F2] text-[#282828]"
                      : "bg-transparent text-[#282828]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 gap-4">
                {lessons.map((lesson, idx) => (
                  <div key={idx} className="px-1 mt-5">
                    <div className="rounded-xl bg-[#4C1534] text-white">
                      <div className="h-[120px] w-[170px] rounded-xl mb-2"></div>
                    </div>
                    <div className="flex items-center gap-2 text-sm ml-1">
                      <img src="/assets/icon/video.png" alt="video" />

                      <span className="text-[13px] font-bold text-[#282828] font-roboto">
                        {lesson.title}
                      </span>
                    </div>
                    <p className="text-xs font-normal text-[#282828] font-roboto ml-1">
                      {lesson.time}
                    </p>
                    <p className="text-[11px] font-normal text-[#585858] font-roboto ml-1">
                      Lesson details here
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col">
                {lessons.map((lesson, index) => (
                  <div key={lesson.id} className="flex items-center gap-3 p-2">
                    <div className="w-6 h-6 rounded-[4px] bg-[#4A0F28] shrink-0" />
                    <div className="flex flex-row justify-between w-full items-center">
                      <div className="text-xs font-normal text-[#282828] font-roboto">
                        Lesson {index + 1} - Title here
                      </div>
                      <div className="text-xs font-normal text-[#282828] font-roboto">
                        Details
                      </div>
                      <div className="text-xs font-normal text-[#282828] font-robotos">
                        {lesson.duration || "10:15 mins"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Lessons;
