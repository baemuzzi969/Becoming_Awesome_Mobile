import React, { useState } from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";
import Header from "../components/Header";

const Profile: React.FC = () => {
  const router = useIonRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !address1.trim() ||
      !address2.trim() ||
      !city.trim() ||
      !state.trim() ||
      !zip.trim() ||
      !country.trim() ||
      !phone.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    router.push("/interaction");
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

          <div className=" bg-white mt-6 rounded-t-3xl px-6 h-full">
            <div className="flex justify-center text-2xl pt-6 text-[#282828] font-bold">
              Update your profile
            </div>
            <div className="flex justify-center text-sm text-[#282828] font-normal font-roboto">
              Hello there! Let's update your profile so we can keep in touch
            </div>

            <div className="space-y-4">
              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  First name
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Sample first name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Last name
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Sample last name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Address line 1
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Sample Address line 1"
                  type="text"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828]  font-normal font-roboto">
                  Address line 2
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Sample Address line 2"
                  type="text"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
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
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
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
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
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
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Phone Number
                </span>
                <input
                  className="custom-input text-[#282828] text-sm border border-solid border-[#A9A9A9] rounded-lg w-full p-[10px] outline-none"
                  placeholder="Phone area code + Phone number"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-center mt-2 text-sm">
                {error}
              </div>
            )}

            <button
              className="w-full mt-6 rounded-xl p-4 text-white font-medium font-roboto text-sm button-gradient"
              onClick={handleContinue}
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

export default Profile;
