import React from "react";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import Event from "../../components/Event";

const Activation: React.FC = () => {
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
                  Welcome to your first activation. <br />
                  <br />
                </span>
                <span>
                  This experience is designed to help you connect with your
                  higher self, spiritual guides, and beings of light, while
                  gently guiding you into the state of oneness. You may revisit
                  this process as often as you wish, and there will be an option
                  to add it to MyPractice for easy access
                  <br />
                  <br />
                </span>
              </div>

              <div className="flex flex-col items-end w-full">
                <div className="w-full border-t border-[#A9A9A9]"></div>

                <button className="flex flex-row justify-between items-center gap-2 min-w-[200px] mt-6 rounded-xl p-4 text-white font-medium text-sm button-gradient">
                  <img src="/assets/icon/video-play.png" alt="play" />
                  <span>Activation Process</span>
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

export default Activation;
