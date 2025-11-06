import React from "react";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import Event from "../../components/Event";
import NotificationBell from "../../components/NotificationBell";
import MyPractice from "../../components/MyPractice";

const Tutorial: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] mx-auto pt-16">
          <Header />

          <div className="flex flex-row w-full justify-between items-center px-6">
            <div className="text-2xl font-bold text-[#282828] font-roboto">
              Ascension App
            </div>
            <NotificationBell count={1} />
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
            <MyPractice />
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
                  [Name], have you explored the Maitreja app yet? <br />
                  <br />
                </span>
                <span>
                  Jump into the Tutorial to see how it works and discover
                  inspiring communities filled with people who share your
                  interests. As a subscriber to the Becoming Awesome app, you
                  get complimentary access to Maitreja—so dive in, connect, and
                  start making meaningful new friendships!
                  <br />
                  <br />
                </span>
              </div>

              <div className="flex flex-col items-end w-full">
                <div className="w-full border-t border-[#A9A9A9]"></div>
                <div className="flex flex-row w-4/5 justify-end gap-3">
                  <button
                    onClick={() => {
                      router.push(
                        "/tabs/program/features",
                        "forward",
                        "replace"
                      );
                    }}
                    className="flex flex-row justify-between items-center gap-2 w-1/2 mt-6 rounded-xl p-4 text-[#282828] font-medium text-sm border border-solid border-[#282828 ]"
                  >
                    Maitreja App Tutorial
                  </button>

                  <button
                    onClick={() => {
                      router.push(
                        "/tabs/program/introduction",
                        "forward",
                        "replace"
                      );
                    }}
                    className="flex flex-row justify-between items-center gap-2 w-1/2 mt-6 rounded-xl p-4 text-white font-medium text-sm button-gradient"
                  >
                    <img src="/assets/icon/video-play.png" alt="play" />
                    <span>Next lesson</span>
                    <img
                      src="/assets/icon/video-play.png"
                      alt="play"
                      className="invisible"
                    />
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

export default Tutorial;
