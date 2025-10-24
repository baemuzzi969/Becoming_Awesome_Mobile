import React, { useState } from "react";
import { IonPage, IonContent, IonIcon, useIonRouter } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import Header from "../components/Header";

const PaymentDetail: React.FC = () => {
  const router = useIonRouter();
  const [securityCode, setSecurityCode] = useState("");
  const [showSecurityCode, setShowSecurityCode] = useState(false);

  const handleContinue = () => {};

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] h-full mx-auto pt-16 overflow-y-auto relative">
          <Header />

          <div className="flex flex-row items-center px-6">
            <div className="w-12 h-12 rounded bg-[#282828]"></div>
            <div className="text-2xl font-bold ml-3 text-[#282828] font-roboto">
              Ascension App
            </div>
          </div>

          <div className="bg-white mt-6 rounded-t-3xl px-6 h-full">
            <div className="flex justify-center text-2xl pt-6 text-[#282828] font-bold">
              Payment Details
            </div>
            <div className="flex text-center text-sm text-[#282828] font-normal font-roboto">
              Update your payment method and address associated with your
              payment information
            </div>

            <div className="flex flex-row gap-2 justify-center mt-3">
              <img src="/assets/icon/card.png" alt="card" />
              <img src="/assets/icon/paypal.png" alt="paypal" />
              <img src="/assets/icon/klarna.png" alt="klarna" />
              <img src="/assets/icon/amazon-pay.png" alt="amazon" />
              <img src="/assets/icon/other-pay.png" alt="other" />
            </div>

            <div className="space-y-4">
              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Card Number
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="1234 1234 1234 1234"
                  type="text"
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Expiration Date
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Sample Expiration date"
                  type="text"
                />
              </div>

              <div className="relative space-y-2">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Security Code
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="*************"
                  type={showSecurityCode ? "number" : "password"}
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value ?? "")}
                />
                <button
                  className="absolute right-2 top-1/2  transform -translate-y-1"
                  onClick={() => setShowSecurityCode(!showSecurityCode)}
                >
                  <IonIcon
                    icon={showSecurityCode ? eyeOffOutline : eyeOutline}
                    className="w-6 h-5 text-[#282828]"
                  />
                </button>
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828]  font-normal font-roboto">
                  Name on payment method
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Sample name on payment method"
                  type="text"
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Billing address
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Sample billing address"
                  type="text"
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  City
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Sample City"
                  type="text"
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  State
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Sample State"
                  type="text"
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Zip
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Zip"
                  type="text"
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Country
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Country"
                  type="text"
                />
              </div>
            </div>

            <div className="pb-12">
              <button
                className="w-full mt-6 rounded-xl p-4 text-white font-medium font-roboto text-sm button-gradient"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaymentDetail;
