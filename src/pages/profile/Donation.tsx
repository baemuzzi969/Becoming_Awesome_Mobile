import React, { useState } from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";

const Donation: React.FC = () => {
  const router = useIonRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("credit-card");
  const [frequency, setFrequency] = useState<"monthly" | "once">("monthly");
  const [amount, setAmount] = useState("50");
  const [currency, setCurrency] = useState("USD");

  const handleBack = () => {
    router.push("/tabs/profile/setting");
  };

  const paymentMethods = [
    { id: "credit-card", label: "Credit card" },
    { id: "bank", label: "Bank", subtitle: "(give 100%)" },
    { id: "paypal", label: "PayPal" },
    { id: "venmo", label: "Venmo" },
    { id: "apple-pay", label: "Apple Pay" },
  ];

  const quickAmounts = [10, 25, 50, 100];

  const handleQuickAmount = (value: number) => {
    setAmount((prev) => String(Number(prev) + value));
  };

  const handleContinue = () => {
    // Handle donation continuation logic here
    console.log("Continue with donation", {
      paymentMethod: selectedPaymentMethod,
      frequency,
      amount,
      currency,
    });
  };

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] h-full mx-auto pt-16 px-6 overflow-y-auto pb-12">
          <div className="flex items-center gap-3 mb-6 h-12">
            <button
              onClick={handleBack}
              className="text-lg font-bold text-[#282828]"
            >
              <img src="/assets/icon/back.png" alt="back" />
            </button>
            <div className="flex text-2xl font-bold font-robotoBold text-[#282828] items-center">
              Donation
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Payment Method Section */}
            <div className="border border-[#A9A9A9] rounded-lg p-4">
              <div className="text-lg font-bold font-robotoBold text-[#282828] mb-4">
                Payment Method
              </div>
              <div className="flex flex-col gap-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                      selectedPaymentMethod === method.id
                        ? "border-solid border-[#282828]"
                        : "border border-solid border-[#A9A9A9] bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col items-start">
                        <span className="text-base font-semibold font-roboto text-[#282828]">
                          {method.label}
                        </span>
                        {method.subtitle && (
                          <span className="text-xs font-normal font-robotoNormal text-[#585858]">
                            {method.subtitle}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency and Amount Section */}
            <div className="border border-[#A9A9A9] rounded-lg p-4">
              <div className="mb-4">
                <div className="text-lg font-bold font-robotoBold text-[#282828] mb-3">
                  Frequency
                </div>
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => setFrequency("monthly")}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold font-roboto transition-all ${
                      frequency === "monthly"
                        ? "button-gradient text-white"
                        : "bg-white text-[#282828] border border-solid border-[#A9A9A9]"
                    }`}
                  >
                    Give Monthly
                  </button>
                  <button
                    onClick={() => setFrequency("once")}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold font-roboto transition-all ${
                      frequency === "once"
                        ? "button-gradient text-white"
                        : "bg-white text-[#282828] border border-solid border-[#A9A9A9]"
                    }`}
                  >
                    Once
                  </button>
                </div>
                <p className="text-xs font-normal font-robotoNormal text-[#585858]">
                  Monthly donations help nonprofits focus on mission and
                  long-term impact, not fundraising. Cancel anytime.
                </p>
              </div>

              <div>
                <div className="text-lg font-bold font-robotoBold text-[#282828] mb-3">
                  Amount
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 border border-[#A9A9A9] rounded-lg p-3 flex items-center">
                    <span className="text-base font-normal font-robotoNormal text-[#282828] mr-1">
                      $
                    </span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="flex-1 outline-none text-base font-normal font-robotoNormal text-[#282828]"
                      min="0"
                    />
                  </div>
                  <div className="relative">
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="border border-[#A9A9A9] rounded-lg p-3 pr-8 appearance-none bg-white text-base font-normal font-robotoNormal text-[#282828] cursor-pointer"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="#282828"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {quickAmounts.map((value) => (
                    <button
                      key={value}
                      onClick={() => handleQuickAmount(value)}
                      className="flex-1 py-2 px-3 border border-solid border-[#A9A9A9] rounded-full text-sm font-semibold font-roboto text-[#282828] hover:button-gradient transition-all"
                    >
                      +{value}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Your Support Matters Section */}
            <div className="border border-[#A9A9A9] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-lg font-bold font-robotoBold text-[#282828]">
                  Why Your Support Matters
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Fund new content creation and transformative lessons",
                  "Improve platform features and user experience",
                  "Support scholarships for those in need",
                  "Keep the platform accessible to everyone",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="#282828"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-normal font-robotoNormal text-[#282828] flex-1">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="w-full button-gradient text-white py-4 rounded-lg text-base font-semibold font-roboto  transition-all"
            >
              Continue with{" "}
              {selectedPaymentMethod === "credit-card"
                ? "credit card"
                : paymentMethods
                    .find((m) => m.id === selectedPaymentMethod)
                    ?.label.toLowerCase()}
            </button>

            {/* Footer Text */}
            <p className="text-xs font-normal font-robotoNormal text-[#A9A9A9] text-center">
              All donations are secure and processed through our payment
              provider. Tax receipts available upon request.
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Donation;
