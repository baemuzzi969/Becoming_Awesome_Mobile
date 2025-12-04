import React, { useState } from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";

const BillingInfo: React.FC = () => {
  const router = useIonRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBack = () => {
    router.push("/tabs/profile/setting");
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsDialogOpen(false);
    }
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
              Billing Info
            </div>
          </div>

          <div className="flex flex-col border border-[#A9A9A9] p-4 rounded-lg">
            <div className="text-xl font-bold font-robotoBold text-[#282828] mb-1">
              Payment Methods
            </div>
            <div className="text-sm font-normal font-robotoNormal text-[#585858] mb-4">
              Manage your payment methods
            </div>

            <div className="border border-[#A9A9A9] rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                        stroke="#585858"
                        strokeWidth="2"
                      />
                      <path d="M2 10H22" stroke="#585858" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-semibold font-roboto text-[#282828]">
                      Visa •••• 4242
                    </div>
                    <div className="text-sm font-normal font-robotoNormal text-[#585858]">
                      Expires 4/2053
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#F5F5F5] text-[#282828] text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Default
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsDialogOpen(true)}
              className="w-full border border-solid border-[#A9A9A9] rounded-lg p-1 flex items-center justify-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4V16M4 10H16"
                  stroke="#282828"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-base font-semibold font-roboto text-[#282828]">
                Add Payment Method
              </span>
            </button>
          </div>
          <div className="mt-8 border border-[#A9A9A9] p-4 rounded-lg mb-12">
            <div className="text-xl font-bold font-robotoBold text-[#282828] mb-1">
              Billing History
            </div>
            <div className="text-sm font-normal font-robotoNormal text-[#585858] mb-4">
              View your past transactions and invoices
            </div>
            <div className="border border-[#A9A9A9] rounded-lg p-4">
              <div className="flex flex-col">
                <div className="text-base font-semibold font-roboto text-[#282828] mb-1">
                  1 x basic (at $30.00 / month)
                </div>
                <div className="text-sm font-normal font-robotoNormal text-[#585858]">
                  Nov 24, 2025 • Invoice LI3B1KWZ-0001
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-base font-semibold font-roboto text-[#282828] mr-2">
                    $30.00
                  </div>
                  <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    Paid
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded ml-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3Z"
                        stroke="#585858"
                        strokeWidth="2"
                      />
                      <path
                        d="M7 7H13M7 10H13M7 13H11"
                        stroke="#585858"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BillingInfo;
