import React from "react";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import Event from "../../components/Event";
import NotificationBell from "../../components/NotificationBell";
import MyPractice from "../../components/MyPractice";

const Features: React.FC = () => {
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
                  Features of the App <br />
                  <br />
                </span>
                <span>
                  The Becoming Awesome Ascension App, created by Tracy and
                  Peter, guides users toward 5D living through a multifaceted
                  program. It features video lessons, in-depth written content,
                  and an AI assistant, Angelica, who provides access to a vast
                  library of teachings, processes, and over 700 YouTube
                  channelings and "My Ascension Handbooks." The app offers a
                  flexible learning path with customizable daily practices.
                  Users can also engage with a strong community through monthly
                  live Zoom meetups, weekly group meditations, and a forum on
                  the Maitreya app. The platform enables direct interaction with
                  the Becoming Awesome team for Q&A. Enhanced by specialized
                  healing music, the presence of Spirit Teams, and a digital
                  notebook option
                  <br />
                  <br />
                </span>
              </div>

              <div className="flex flex-col items-end w-full">
                <div className="w-full border-t border-[#A9A9A9]"></div>

                <button
                  onClick={() => {
                    router.push("/tabs/program/tutorial", "forward", "replace");
                  }}
                  className="flex flex-row justify-between items-center gap-2 min-w-[200px] mt-6 rounded-xl p-4 text-white font-medium text-sm button-gradient"
                >
                  <img src="/assets/icon/video-play.png" alt="play" />
                  <span>Features of the App</span>
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

export default Features;
