import React from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";

const Subscription: React.FC = () => {
  const router = useIonRouter();

  const handleBack = () => {
    router.push("/tabs/profile/setting");
  };

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] h-full mx-auto pt-16 px-6 overflow-y-auto relative">
          <div className="flex items-center gap-3 mb-3 h-12">
            <button
              onClick={handleBack}
              className="text-lg font-bold text-[#282828]"
            >
              <img src="/assets/icon/back.png" alt="back" />
            </button>
            <div className="flex text-2xl font-bold font-robotoBold text-[#282828] items-center">
              Subscription
            </div>
          </div>

          <div className="border border-[#A9A9A9] rounded-lg p-4 mb-4">
            <div className="text-lg font-bold font-robotoBold text-[#282828]">
              Current Subscription
            </div>
            <div className="text-xs font-normal font-robotoNormal text-[#585858] mb-4">
              Manage your subscription plan
            </div>

            <div className="flex flex-col ">
              <div className="flex items-center justify-between mb-3">
                <div className="flex w-full items-center justify-between border border-solid border-[#A9A9A9] rounded-lg p-4">
                  <div className="flex flex-col">
                    <div className="text-base font-semibold font-roboto text-[#282828]">
                      Trial Plan
                    </div>
                    <div className="text-xs font-normal font-robotoNormal text-[#585858]">
                      $20.00/month
                    </div>
                  </div>
                  <div className="flex bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    Canceled
                  </div>
                </div>
              </div>

              <div className="text-sm font-normal font-robotoNormal text-[#282828] mb-4">
                Current Period: Nov 23, 2025 - Dec 23, 2025
              </div>

              <div className="flex gap-3">
                <button className="flex-1 border border-solid border-[#A9A9A9] rounded-lg py-2 px-4 text-sm font-semibold font-roboto font-robotoMedimum text-[#282828]">
                  Change Plan
                </button>
                <button className="flex-1 rounded-lg py-2 px-4 text-sm font-semibold font-roboto text-red-500 border border-solid border-[#A9A9A9]">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-lg font-bold font-robotoBold text-[#282828] mb-1">
              Available Plans
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <div className="border border-solid border-[#282828] rounded-lg p-4 relative">
                <div className="flex w-full justify-between items-center">
                  <div className="flex flex-col">
                    <div className="text-lg font-bold font-robotoBold text-[#282828]">
                      Trial
                    </div>
                    <div className="text-base font-semibold font-roboto text-[#282828] mb-2">
                      $20.0/month
                    </div>
                  </div>
                  <div className="flex bg-[#282828] text-white text-xs font-semibold px-2 py-1 rounded">
                    Current
                  </div>
                </div>
                <div className="text-xs font-normal font-robotoNormal text-[#585858] mb-3">
                  Valid for limited number of lessons. Maitreja access is
                  included
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="#22C55E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-normal font-robotoNormal text-[#282828]">
                      Maitreja
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="#22C55E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-normal font-robotoNormal text-[#282828]">
                      Angelica
                    </span>
                  </div>
                </div>
                <button
                  disabled
                  className="w-full text-[#282828] rounded-lg py-2 px-4 text-sm font-semibold font-roboto border border-solid border-[#A9A9A9]"
                >
                  Current Plan
                </button>
              </div>

              <div className="border border-[#A9A9A9] rounded-lg p-4">
                <div className="text-lg font-bold font-robotoBold text-[#282828] mb-2">
                  Basic
                </div>
                <div className="text-base font-semibold font-roboto text-[#282828] mb-2">
                  $30.0/month
                </div>
                <div className="text-xs font-normal font-robotoNormal text-[#585858] mb-3">
                  tsetset
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="#22C55E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-normal font-robotoNormal text-[#282828]">
                      setset
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="#22C55E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-normal font-robotoNormal text-[#282828]">
                      stsetse
                    </span>
                  </div>
                </div>
                <button className="w-full text-white rounded-lg py-2 px-4 text-sm font-semibold font-roboto button-gradient">
                  Upgrade
                </button>
              </div>

              <div className="border border-[#A9A9A9] rounded-lg p-4 mb-12">
                <div className="text-lg font-bold font-robotoBold text-[#282828] mb-2">
                  Premium
                </div>
                <div className="text-base font-semibold font-roboto text-[#282828] mb-2">
                  $60.0/month
                </div>
                <div className="text-xs font-normal font-robotoNormal text-[#585858] mb-3">
                  Prenium
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="#22C55E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-normal font-robotoNormal text-[#282828]">
                      Prenium
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="#22C55E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-normal font-robotoNormal text-[#282828]">
                      Prenium
                    </span>
                  </div>
                </div>
                <button className="w-full text-white rounded-lg py-2 px-4 text-sm font-semibold font-roboto button-gradient">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Subscription;
