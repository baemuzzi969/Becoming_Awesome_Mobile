import React, { useState } from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import NotificationBell from "../../components/NotificationBell";

type ViewMode = "grid" | "list";
type FilterTab = "all" | "prompts" | "entries" | "charges" | "review";

interface Journal {
  id: string;
  title: string;
  time: string;
  details: string;
  duration?: string;
}

const Journals: React.FC = () => {
  const router = useIonRouter();
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const journals: Journal[] = [
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
    { id: "all", label: "All Journals" },
    { id: "prompts", label: "Lesson Prompts" },
    { id: "entries", label: "Additional Entries" },
    { id: "charges", label: "Charges" },
    { id: "review", label: "Life Review" },
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
                MyJournal
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  className="p-3 rounded-xl transition-colors 
                    bg-transparent"
                  aria-label="Grid view"
                >
                  <img src="/assets/icon/add.png" alt="grid" />
                </button>
                <button
                  type="button"
                  className="p-[2px] rounded-xl transition-colors bg-transparent"
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
            {journals.map((journal, index) => (
              <div className="mt-2" key={index}>
                <div className="flex flex-col bg-[#F2F2F2] rounded-2xl w-full h-fit p-3">
                  <div className="flex flex-row justify-between">
                    <div className="text-[#282828] font-medium font-roboto text-base">
                      Title here
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                      <div className="text-xs font-normal font-roboto text-white px-2 py-[2px] bg-[#8E185A] rounded-2xl">
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
                  <div className="mt-2 text-[#282828] font-normal font-roboto text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                  <div className="mt-2 text-[#585858] text-xs font-normal font-roboto">
                    June 27, 2025
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Journals;
