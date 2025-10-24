import React from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";
import Header from "../components/Header";

const Interaction: React.FC = () => {
  const router = useIonRouter();

  const handleContinue = () => {
    router.push("/select-plan");
  };

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
              Setup Interaction
            </div>
            <div className="flex text-center text-sm text-[#282828] font-normal font-roboto">
              How do you do? Let's define how you interact during your journey
              of enlightenment
            </div>

            {/* First set of radio buttons */}
            <div className="mt-6 space-y-3">
              <span className="text-sm text-[#282828] font-normal font-roboto">
                How would you like us to interact with you?
              </span>
              <div className="flex flex-col space-y-3">
                <label className="flex flex-row gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="top-preference"
                    value="voice-and-text"
                    defaultChecked
                    className="w-6 h-6 accent-[#282828]"
                  />
                  <span className="text-sm text-[#282828] font-normal font-roboto">
                    Voice and Text
                  </span>
                </label>
                <label className="flex flex-row gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="top-preference"
                    value="text-only"
                    defaultChecked
                    className="w-6 h-6 accent-[#282828]"
                  />
                  <span className="text-sm text-[#282828] font-normal font-roboto">
                    Text Only
                  </span>
                </label>
              </div>
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-[#E5E5E5] my-6"></div>

            <div className="mt-6 space-y-3">
              <span className="text-sm text-[#282828] font-normal font-roboto">
                How would you like to interact with us?
              </span>
              <div className="flex flex-col space-y-3">
                <label className="flex flex-row gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="bottom-preference"
                    value="voice"
                    defaultChecked
                    className="w-6 h-6 accent-[#282828]"
                  />
                  <span className="text-sm text-[#282828] font-normal font-roboto">
                    Voice
                  </span>
                </label>
                <label className="flex flex-row gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="bottom-preference"
                    value="text"
                    defaultChecked
                    className="w-6 h-6 accent-[#282828]"
                  />
                  <span className="text-sm text-[#282828] font-normal font-roboto">
                    Text
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="absolute w-full px-6 bottom-0">
            <button
              onClick={handleContinue}
              className="w-full mt-6 rounded-xl p-4 text-white font-medium font-roboto text-sm button-gradient"
            >
              Continue
            </button>
            <span className="flex w-full justify-center text-sm font-normal font-roboto text-[#282828] underline mt-3 pb-12">
              Review terms, conditions and data privacy
            </span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Interaction;
