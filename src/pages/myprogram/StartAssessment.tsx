import React from "react";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import Header from "../../components/Header";
import Event from "../../components/Event";
import NotificationBell from "../../components/NotificationBell";
import MyPractice from "../../components/MyPractice";

const StartAssessment: React.FC = () => {
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
                  As you progress in your Ascension, it’s important to take time
                  to notice where you are in your journey. This will allow you
                  to be able to see how far you have come. The assessment is for
                  you alone. Be honest. The following are early symptoms of
                  Awakening. The symptoms listed are the ones generally
                  experienced first. You may have many other symptoms not listed
                  here which may show up in future assessments. Please check all
                  that you have experienced.
                  <br />
                  <br />
                  Headaches, brain surgery <br />
                  Tingling, especially on Crown of head, hands <br />
                  Periods of fatigue <br />
                  Rapid blinking <br />
                  Becoming an observer of your thoughts <br />
                  Deeper meditations <br />
                  See repeats of sacred numbers examples 11:11, 4:44 <br />
                  Feeling uncomfortable with complaints or gossip <br />
                  Friends have drifted away <br />
                  Restless, seeking something more
                  <br />
                  <br />
                </span>
              </div>

              <div className="flex flex-col items-end w-full">
                <div className="w-full border-t border-[#A9A9A9]"></div>

                <button className="flex flex-row justify-center items-center gap-2 min-w-[200px] mt-6 rounded-xl p-4 text-white font-medium text-sm button-gradient">
                  <span>Start Assessment</span>
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

export default StartAssessment;
