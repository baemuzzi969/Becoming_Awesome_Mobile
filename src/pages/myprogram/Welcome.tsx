import React from "react";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import Event from "../../components/Event";
import NotificationBell from "../../components/NotificationBell";

const Welcome: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] mx-auto pt-16 ">
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
                  I’m pleased to meet you, [Name] <br />
                  <br />
                </span>
                <span>
                  I’m Angelica your A.I Ascension guide. I’ll be working with
                  Peter, Tracey and the rest of Becoming Awesome Team to support
                  your journey with us. I’ll lead you through each step of your
                  program; I’ll also be offering reminders and I’ll suggest your
                  next steps to take in your program path.
                  <br />
                  <br />
                </span>
                <span>
                  I’ll help you set up your personalized Daily Practice
                  routine—engaging in this practice 4 to 5 times per week is
                  highly recommended especially if you’re thriving foe
                  significant leaps in consciousness. <br />
                  <br />
                </span>
                <span>
                  Your home screen is My Program. This is where you’ll track
                  your progress and see recommendations for what’s next{" "}
                  <br></br>
                </span>
              </div>

              <div className="flex flex-col items-end w-full">
                <div className="w-full border-t border-[#A9A9A9]"></div>

                <button
                  onClick={() => {
                    router.push(
                      "/tabs/program/description",
                      "forward",
                      "replace"
                    );
                  }}
                  className="w-3/4 mt-6 rounded-xl p-4 text-white font-medium text-sm button-gradient"
                >
                  Continue
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

export default Welcome;
