import React from "react";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import Event from "../../components/Event";

const Background: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] h-full mx-auto pt-16">
          <Header />

          <div className="flex flex-row w-full justify-between items-center px-6">
            <div className="text-2xl font-bold text-[#282828] font-roboto">
              Ascension App
            </div>
            <div className="px-[14px] py-3 bg-white rounded-xl">
              <img src="/assets/icon/alarm.png" alt="alarm" />
            </div>
          </div>
          <div className="px-6 mt-3">
            <div className="text-sm font-bold font-roboto">
              Hello Sample User!
            </div>
            <div className="text-xs font-normal font-roboto">
              It looks like a beautiful day to embrace your ascension journey
              shall we begin?
            </div>
          </div>

          <div className="bg-white mt-6 px-6 h-full">
            <div className="flex items-center gap-3 pt-6">
              <img src="/assets/icon/angelica-ai.png" alt="angelica" />
              <div>
                <div className="text-base text-[#282828] font-bold font-roboto">
                  Angelica AI Ascension Guide
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between min-h-[400px] mt-5 border border-solid border-[#A9A9A9] rounded-xl p-3">
              <div className="text-xs text-[#282828] font-normal font-roboto">
                <span>
                  [Name], would you like to review Peter’s and Tracy’s resume?
                  simply click the buttons below to take a look.
                  <br />
                </span>
              </div>

              <div className="flex flex-col items-end w-full">
                <div className="w-full border-t border-[#A9A9A9]"></div>
                <div className="flex flex-row gap-4">
                  <button className="mt-6 rounded-xl px-1 py-4 text-[#282828] font-medium text-sm bg-white border border-solid border-[#282828]">
                    Peter's Background
                  </button>
                  <button className="mt-6 rounded-xl px-1 py-4 text-[#282828] font-medium text-sm bg-white border border-solid border-[#282828]">
                    Tracy's Background
                  </button>
                  <button
                    onClick={() => {
                      router.push(
                        "/tabs/program/activation",
                        "forward",
                        "replace"
                      );
                    }}
                    className="mt-6 rounded-xl px-3 py-4 text-white font-medium text-sm button-gradient"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <Event />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Background;
