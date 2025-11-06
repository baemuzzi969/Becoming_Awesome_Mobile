import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../../components/Header";
import NotificationBell from "../../components/NotificationBell";
import MyPractice from "../../components/MyPractice";
import MyJournal from "../../components/MyJournal";

const Home: React.FC = () => {
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
          <div className="bg-white mt-6 px-6 h-full">
            <div>
              <MyPractice kind={"lesson"} />
            </div>
            <div className="mt-7">
              <MyPractice kind={"assessment"} />
            </div>
            <div className="mt-7">
              <MyJournal />
            </div>
            <div className="mt-7">
              <MyPractice kind={"music"} />
            </div>
            <div className="mt-7">
              <MyPractice kind={"bookmark"} />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
