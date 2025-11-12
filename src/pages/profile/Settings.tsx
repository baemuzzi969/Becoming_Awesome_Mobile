import { IonContent, IonPage } from "@ionic/react";
import React from "react";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] mx-auto pt-16 px-6 overflow-y-auto">
          <div className="flex h-12 text-2xl font-bold font-roboto text-[#282828] items-center">
            Settings
          </div>
          <div className="flex flex-col mt-7 py-3 px-4 gap-2 border border-[#A9A9A9] rounded-lg">
            <div className="text-base font-normal font-roboto text-[#282828]">
              Sample User
            </div>
            <div className="text-xs font-normal font-roboto text-[#585858]">
              Sampleuser@gmail.com
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <div className="flex flex-row justify-between border border-[#A9A9A9] rounded-lg items-center py-3 px-4">
              <div className="text-base font-semibold font-roboto text-[#282828]">
                Account
              </div>
              <img
                src="/assets/icon/vector.png"
                alt="vector"
                className="w-2 h-3"
              />
            </div>
            <div className="flex flex-row justify-between border border-[#A9A9A9] rounded-lg items-center py-3 px-4">
              <div className="text-base font-semibold font-roboto text-[#282828]">
                Subscription
              </div>
              <img
                src="/assets/icon/vector.png"
                alt="vector"
                className="w-2 h-3"
              />
            </div>
            <div className="flex flex-row justify-between border border-[#A9A9A9] rounded-lg items-center py-3 px-4">
              <div className="text-base font-semibold font-roboto text-[#282828]">
                Billing info
              </div>
              <img
                src="/assets/icon/vector.png"
                alt="vector"
                className="w-2 h-3"
              />
            </div>
            <div className="flex flex-row justify-between border border-[#A9A9A9] rounded-lg items-center py-3 px-4">
              <div className="text-base font-semibold font-roboto text-[#282828]">
                Donation
              </div>
              <img
                src="/assets/icon/vector.png"
                alt="vector"
                className="w-2 h-3"
              />
            </div>
            <div className="flex flex-row justify-between border border-[#A9A9A9] rounded-lg items-center py-3 px-4">
              <div className="text-base font-semibold font-roboto text-[#282828]">
                Contact and support
              </div>
              <img
                src="/assets/icon/vector.png"
                alt="vector"
                className="w-2 h-3"
              />
            </div>
            <div className="flex flex-row justify-between border border-[#A9A9A9] rounded-lg items-center py-3 px-4">
              <div className="text-base font-semibold font-roboto text-[#282828]">
                App settings
              </div>
              <img
                src="/assets/icon/vector.png"
                alt="vector"
                className="w-2 h-3"
              />
            </div>
            <div className="flex flex-row justify-between border border-[#A9A9A9] rounded-lg items-center py-3 px-4">
              <div className="text-base font-semibold font-roboto text-[#282828]">
                Log out
              </div>
              <img
                src="/assets/icon/vector.png"
                alt="vector"
                className="w-2 h-3"
              />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
