import React, { useState } from "react";
import { IonContent, IonPage, useIonRouter, IonModal } from "@ionic/react";
import Header from "../../components/Header";
import Event from "../../components/Event";
import NotificationBell from "../../components/NotificationBell";
import CustomVideoPlayer from "../../components/CustomVideoPlayer";

const Description: React.FC = () => {
  const router = useIonRouter();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
                  Get ready to gently expand your awareness and connect deeply.
                  We'll explain everything as you go through our 3-level
                  program, starting with foundational skills.
                  <br />
                  <br />
                </span>
                <span>
                  Your AI guide, Angelica, is here to help as you go at your own
                  pace. Regular practice can lead to feeling lighter, more
                  present, and joyful, with a growing spiritual connection.
                  <br />
                  <br />
                </span>
                <span>
                  Built on Peter & Tracy's deep experience, this app offers
                  effective tools and direct energy transmissions to awaken your
                  unique gifts. <br />
                  <br />
                </span>
              </div>

              <div className="flex flex-col items-end w-full">
                <div className="w-full border-t border-[#A9A9A9]"></div>

                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="flex flex-row items-center gap-2 min-w-[200px] mt-6 rounded-xl p-4 text-white font-medium text-sm button-gradient"
                >
                  <img src="/assets/icon/video-play.png" alt="play" />
                  <span>Welcome to Becoming Awesome</span>
                </button>
              </div>
            </div>
            <Event />
          </div>
        </div>

        <IonModal
          isOpen={isVideoOpen}
          onDidDismiss={() => setIsVideoOpen(false)}
          className="video-modal"
        >
          <div className="w-full h-full">
            <CustomVideoPlayer
              src="https://becomingawesome.s3.us-east-2.amazonaws.com/mov_bbb.mp4"
              title={"Lesson no. - Welcome to Becoming Awesome"}
              poster={"/assets/img/welcome-poster.jpg"}
              onClose={() => setIsVideoOpen(false)}
            />
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Description;
