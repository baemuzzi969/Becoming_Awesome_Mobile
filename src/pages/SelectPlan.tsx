import React, { useState } from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";
import Header from "../components/Header";

const SelectPlan: React.FC = () => {
  const router = useIonRouter();
  const [plan, setPlan] = useState<"free" | "monthly" | "six">("free");

  const handleContinue = () => {
    router.push("/payment-detail");
  };

  const ctaText = () => {
    switch (plan) {
      case "monthly":
        return "Select Monthly Membership";
      case "six":
        return "Select Membership for 6 months";
      default:
        return "Select Free Membership";
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] mx-auto pt-16 overflow-y-auto relative">
          <Header />

          <div className="flex flex-row items-center px-6">
            <div className="w-12 h-12 rounded bg-[#282828]"></div>
            <div className="text-2xl font-bold ml-3 text-[#282828] font-roboto">
              Ascension App
            </div>
          </div>

          <div className="bg-white mt-6 rounded-t-3xl px-6 h-full">
            <div className="flex justify-center text-2xl pt-6 text-[#282828] font-bold">
              Select a plan to begin your journey
            </div>
            <div className="mt-6">
              <label className="flex items-center justify-between py-4 border-t border-[#A9A9A9] cursor-pointer">
                <div>
                  <div className="text-sm font-bold font-roboto text-[#282828]">
                    Free
                  </div>
                </div>

                <input
                  type="radio"
                  name="plan"
                  value="free"
                  checked={plan === "free"}
                  onChange={() => setPlan("free")}
                  className="sr-only"
                  id="plan-free"
                />

                <span
                  className={
                    "w-6 h-6 rounded-full border border-[#282828] flex items-center justify-center " +
                    (plan === "free" ? "bg-[#282828]" : "bg-transparent")
                  }
                  aria-hidden="true"
                  onClick={() => setPlan("free")}
                >
                  {plan === "free" && (
                    <img src="/assets/icon/tick.png" alt="tick" />
                  )}
                </span>
              </label>

              <label className="flex items-center justify-between py-4 border-t border-[#A9A9A9]">
                <div>
                  <div className="text-sm font-bold font-roboto  text-[#282828]">
                    Awesome Membership
                  </div>
                  <div className="text-sm font-bold font-roboto  text-[#282828]">
                    $299 per month
                  </div>
                </div>
                <input
                  type="radio"
                  name="plan"
                  value="monthly"
                  checked={plan === "monthly"}
                  onChange={() => setPlan("monthly")}
                  className="sr-only"
                  id="plan-monthly"
                />
                <span
                  className={
                    "w-6 h-6 rounded-full border border-[#282828] flex items-center justify-center " +
                    (plan === "monthly" ? "bg-[#282828]" : "bg-transparent")
                  }
                  aria-hidden="true"
                  onClick={() => setPlan("monthly")}
                >
                  {plan === "monthly" && (
                    <img src="/assets/icon/tick.png" alt="tick" />
                  )}
                </span>
              </label>

              <label className="flex items-center justify-between py-4 border-t border-[#A9A9A9]">
                <div>
                  <div className="text-sm font-bold font-roboto text-[#282828]">
                    I'm committed to ascending and I want to save
                  </div>
                  <div className="text-sm font-bold font-roboto  text-[#282828]">
                    $1295 for 6 months
                  </div>
                </div>
                <input
                  type="radio"
                  name="plan"
                  value="six"
                  checked={plan === "six"}
                  onChange={() => setPlan("six")}
                  className="sr-only"
                  id="plan-six"
                />
                <span
                  className={
                    "w-6 h-6 rounded-full border border-[#282828] flex items-center justify-center " +
                    (plan === "six" ? "bg-[#282828]" : "bg-transparent")
                  }
                  aria-hidden="true"
                  onClick={() => setPlan("six")}
                >
                  {plan === "six" && (
                    <img src="/assets/icon/tick.png" alt="tick" />
                  )}
                </span>
              </label>

              <div className="border-t border-[#A9A9A9] py-4">
                <div className="text-sm font-bold text-[#282828]">Free</div>
                <div className="text-xs font-normal text-[#585858] leading-5">
                  Access to a limited number of teaching units & transmissons to
                  get a feel if this path to consciousness is right for you
                </div>
              </div>

              <div className="border-t border-[#A9A9A9] py-4">
                <div className="text-sm font-bold text-[#282828]">
                  Awesome Membership
                </div>
                <div className="text-sm font-normal text-[#282828]">
                  Full access to all features for one month
                </div>

                <div className="mt-3 text-xs font-normal text-[#585858] leading-5">
                  60+ teachings in both video and written format <br />
                  40+ video processes, activations & transmissions <br />
                  Digital Journal helpyou dive deeper <br />
                  Unlimited AI assisted searches of our 3 books and 500+
                  channeled videos to answer your questions <br />
                  Weekly live group conscious manifestation meetups <br />
                  Monthly Q&As with live transformational processes
                  <br />
                </div>
              </div>

              <div className="border-t border-[#A9A9A9] py-4">
                <div className="text-sm font-bold text-[#282828]">
                  I'm committed to ascending and I want to save
                </div>
                <div className="text-sm font-normal text-[#282828]">
                  Pay for 5 months, get the 6th month FREE
                </div>

                <div className="mt-3 text-xs font-normal text-[#585858] leading-5">
                  You’ll have full access to all the features of the Becoming
                  Awesome Ascension Program, and you’ll save money by going all
                  in.
                </div>

                <div className="mt-3 text-xs font-normal text-[#585858] leading-5">
                  People who have seriously worked this type of program for 6
                  months don’t even recognize themselves because so much in
                  their lives have improved. Get the most out of your ascension
                  process by committing to six months and save $259 off a
                  monthly subscription.
                </div>
              </div>

              <div className="py-12">
                <button
                  onClick={handleContinue}
                  className="w-full rounded-xl p-4 text-white font-medium font-roboto text-sm button-gradient"
                >
                  {ctaText()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SelectPlan;
