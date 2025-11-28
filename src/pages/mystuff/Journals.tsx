import React, { useState, useRef, useEffect } from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import NotificationBell from "../../components/NotificationBell";

type ViewMode = "grid" | "list";
type FilterTab = "all" | "prompts" | "entries" | "charges" | "review";
type JournalType =
  | "lesson-prompts"
  | "density-clearing"
  | "additional-entries"
  | "charges"
  | "life-review";

interface Journal {
  id: string;
  title: string;
  time: string;
  details: string;
  duration?: string;
}

interface NewJournalEntry {
  title: string;
  description: string;
  date: string;
  type: JournalType;
}

const Journals: React.FC = () => {
  const router = useIonRouter();
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [showDialog, setShowDialog] = useState(false);
  const [newEntry, setNewEntry] = useState<NewJournalEntry>({
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    type: "lesson-prompts",
  });

  const journalTypes: { id: JournalType; label: string }[] = [
    { id: "lesson-prompts", label: "Lesson Prompt" },
    { id: "density-clearing", label: "Density Clearing List" },
    { id: "additional-entries", label: "Additional Entries" },
    { id: "life-review", label: "Life Review" },
  ];

  const [showTypeMenu, setShowTypeMenu] = useState(false);
  const typeMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        showTypeMenu &&
        typeMenuRef.current &&
        !typeMenuRef.current.contains(e.target as Node)
      ) {
        setShowTypeMenu(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [showTypeMenu]);

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
            <div className="text-2xl font-bold text-[#282828] font-robotoBold">
              Ascension App
            </div>
            <NotificationBell count={1} />
          </div>

          <div className="bg-white mt-6 px-6 w-full h-full pb-12">
            <div className="flex flex-row justify-between items-center pt-2">
              <div className="text-[#282828] text-base font-bold font-robotoBold">
                MyJournal
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowDialog(true)}
                  className="p-3 rounded-xl transition-colors 
                    bg-transparent"
                  aria-label="Add"
                >
                  <img src="/assets/icon/add.png" alt="grid" />
                </button>
              </div>
            </div>

            <div className="flex gap-1 overflow-x-auto mt-4 pb-2 hide-scrollbar">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-2 py-2 rounded-lg text-sm font-bold font-robotoBold whitespace-nowrap transition-colors shrink-0 ${
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
                    <div className="text-[#282828] font-medium font-robotoMedium text-base">
                      Title here
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                      <div className="text-xs font-normal font-robotoNormal text-white px-2 py-[2px] bg-[#8E185A] rounded-2xl">
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
                  <div className="mt-2 text-[#282828] font-normal font-robotoNormal text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </div>
                  <div className="mt-2 text-[#585858] text-xs font-normal font-robotoNormal">
                    June 27, 2025
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showDialog && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
              onClick={() => setShowDialog(false)}
            >
              <div
                className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-lg max-h-[90vh] overflow-y-auto animate-slideUp"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-row justify-between items-center mb-6">
                  <div className="text-xl font-bold text-[#282828] font-robotoBold">
                    Create New Journal Entry
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#282828] font-robotoBold">
                      Journal Type
                    </label>
                    <div className="relative" ref={typeMenuRef}>
                      <button
                        type="button"
                        onClick={() => setShowTypeMenu((s) => !s)}
                        className="w-full flex items-center justify-between border border-solid border-[#A9A9A9] rounded-lg p-[10px] text-sm text-[#282828] focus:outline-none focus:border-[#282828] bg-white"
                        aria-haspopup="listbox"
                        aria-expanded={showTypeMenu}
                      >
                        <span>
                          {journalTypes.find((t) => t.id === newEntry.type)
                            ?.label ?? "-- Select Journal Type --"}
                        </span>
                        <img
                          src="/assets/icon/vector.png"
                          alt="chevron"
                          className={`ml-2 transform transition-transform duration-200 ${
                            showTypeMenu ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {showTypeMenu && (
                        <ul
                          role="listbox"
                          aria-label="Journal types"
                          className="absolute z-50 mt-2 w-full bg-white border border-[#A9A9A9] rounded-lg shadow-md max-h-56 overflow-auto text-sm text-[#282828]"
                        >
                          {journalTypes.map((type) => (
                            <li key={type.id}>
                              <button
                                type="button"
                                onClick={() => {
                                  setNewEntry({ ...newEntry, type: type.id });
                                  setShowTypeMenu(false);
                                }}
                                className="w-full text-left px-3 py-2 hover:bg-[#F2F2F2]"
                              >
                                {type.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#282828] font-robotoBold">
                      Title
                    </label>
                    <input
                      type="text"
                      value={newEntry.title}
                      onChange={(e) =>
                        setNewEntry({ ...newEntry, title: e.target.value })
                      }
                      placeholder="Enter journal title"
                      className="border border-[#A9A9A9] rounded-lg p-2 text-[#282828] placeholder-[#999999] focus:outline-none focus:border-[#282828] custom-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#282828] font-robotoBold">
                      Description
                    </label>
                    <textarea
                      value={newEntry.description}
                      onChange={(e) =>
                        setNewEntry({
                          ...newEntry,
                          description: e.target.value,
                        })
                      }
                      placeholder="Enter journal description"
                      rows={4}
                      className="border border-[#A9A9A9] rounded-lg p-[10px] text-[#282828] placeholder-[#999999] focus:outline-none focus:border-[#282828] resize-none custom-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#282828] font-robotoBold">
                      Date
                    </label>
                    <input
                      type="date"
                      value={newEntry.date}
                      onChange={(e) =>
                        setNewEntry({ ...newEntry, date: e.target.value })
                      }
                      className="border border-[#A9A9A9] rounded-lg p-[10px] text-sm text-[#282828] focus:outline-none focus:border-[#282828]"
                    />
                  </div>

                  <div className="flex gap-3 mt-6 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowDialog(false)}
                      className="flex-1 py-3 rounded-lg text-sm text-[#282828] font-bold font-robotoBold border border-solid border-[#282828]"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        console.log("New Journal Entry:", newEntry);
                        setShowDialog(false);
                        setNewEntry({
                          title: "",
                          description: "",
                          date: new Date().toISOString().split("T")[0],
                          type: "lesson-prompts",
                        });
                      }}
                      className="flex-1 py-3 rounded-lg text-white font-bold font-robotoBold button-gradient text-sm"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Journals;
