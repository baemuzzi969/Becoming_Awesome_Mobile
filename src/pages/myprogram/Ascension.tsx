import React from "react";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import Event from "../../components/Event";
import NotificationBell from "../../components/NotificationBell";
import MyPractice from "../../components/MyPractice";

const Ascension: React.FC = () => {
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
                  What is Ascension?
                  <br />
                  <br />
                </span>
                <span>
                  Ascension, traditionally seen as the spirit leaving the body
                  for a heavenly realm across various faiths, is now accessible
                  to all as Earth's energetic frequencies shift. This modern
                  understanding isn't about physical departure, but rather
                  integrating "heavenly attributes" into your current life. This
                  can manifest as heightened intuition, conscious contact with
                  Source, effective manifestation, and even slowing aging. The
                  Becoming Awesome Ascension program guides you through inner
                  work to raise your frequency, helping you transmute challenges
                  into "unimaginable wonders," essentially bringing "Heaven to
                  Earth" in your present reality. While the program can't
                  guarantee every gift, its teachings have transformed many
                  lives.
                  <br />
                  <br />
                </span>
              </div>

              <div className="flex flex-col items-end w-full">
                <div className="w-full border-t border-[#A9A9A9]"></div>

                <button
                  onClick={() => {
                    router.push(
                      "/tabs/program/assessment",
                      "forward",
                      "replace"
                    );
                  }}
                  className="flex flex-row justify-between items-center gap-2 min-w-[200px] mt-6 rounded-xl p-4 text-white font-medium text-sm button-gradient"
                >
                  <img src="/assets/icon/video-play.png" alt="play" />
                  <span>What is Ascension?</span>
                  <img
                    src="/assets/icon/video-play.png"
                    alt="play"
                    className="invisible"
                  />
                </button>
              </div>
            </div>
            <Event />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Ascension;
