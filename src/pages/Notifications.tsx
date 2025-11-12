import React from "react";
import { IonPage, IonContent, useIonRouter, IonIcon } from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import Header from "../components/Header";

interface Notification {
  id: string;
  message: string;
}

const Notifications: React.FC = () => {
  const router = useIonRouter();

  const notifications: Notification[] = [
    {
      id: "1",
      message: "Time to continue your lesson - Celebrate like a kid",
    },
    {
      id: "2",
      message: "Time to continue your lesson - Celebrate like a kid",
    },
    // Add more notifications as needed
  ];

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] h-full mx-auto pt-16 overflow-y-auto relative">
          <div className="flex flex-row h-12 items-center px-6 bg-white gap-7">
            <button type="button" onClick={() => router.goBack()}>
              <img src="/assets/icon/back.png" alt="back" />
            </button>
            <div className="text-lg font-bold text-[#282828] font-roboto">
              Notifications
            </div>
          </div>

          <div className="w-full border-t border-[#A9A9A9]"></div>

          <div className="bg-white px-6 pb-12">
            {notifications.length === 0 ? (
              <div className="text-center py-12 text-[#585858] font-roboto">
                No notifications
              </div>
            ) : (
              <div className="flex flex-col mt-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center gap-3 py-2"
                  >
                    <div className="w-6 h-6 rounded bg-[#4A0F28] shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs text-[#282828] font-roboto">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
