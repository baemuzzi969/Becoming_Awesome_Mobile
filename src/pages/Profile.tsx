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
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    address1?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    phone?: string;
  }>({});

  const handleContinue = () => {
    let newErrors: { [key: string]: string } = {};
    let hasErrors = false;

    // Validate firstName
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
      hasErrors = true;
    }

    // Validate lastName
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
      hasErrors = true;
    }

    // Validate address1
    if (!address1.trim()) {
      newErrors.address1 = "Address is required";
      hasErrors = true;
    }

    // Validate city
    if (!city.trim()) {
      newErrors.city = "City is required";
      hasErrors = true;
    }

    // Validate state
    if (!state.trim()) {
      newErrors.state = "State is required";
      hasErrors = true;
    }

    // Validate zip code
    if (!zip.trim()) {
      newErrors.zip = "ZIP code is required";
      hasErrors = true;
    } else if (!/^\d{5}(-\d{4})?$/.test(zip.trim())) {
      newErrors.zip = "Invalid ZIP code format";
      hasErrors = true;
    }

    // Validate country
    if (!country.trim()) {
      newErrors.country = "Country is required";
      hasErrors = true;
    }

    // Validate phone
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      hasErrors = true;
    } else if (!/^\+?[\d\s-]{10,}$/.test(phone.trim())) {
      newErrors.phone = "Invalid phone number format";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
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
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.firstName ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Enter your first name"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (errors.firstName) {
                      setErrors((prev) => ({ ...prev, firstName: undefined }));
                    }
                  }}
                />
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Last name
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.lastName ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Enter your last name"
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    if (errors.lastName) {
                      setErrors((prev) => ({ ...prev, lastName: undefined }));
                    }
                  }}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Address line 1
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.address1 ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Address line 1"
                  type="text"
                  value={address1}
                  onChange={(e) => {
                    setAddress1(e.target.value);
                    if (errors.address1) {
                      setErrors((prev) => ({ ...prev, address1: undefined }));
                    }
                  }}
                />
                {errors.address1 && (
                  <p className="text-red-500 text-xs mt-1">{errors.address1}</p>
                )}
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
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.city ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="City"
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    if (errors.city) {
                      setErrors((prev) => ({ ...prev, city: undefined }));
                    }
                  }}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  State
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.state ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="State"
                  type="text"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    if (errors.state) {
                      setErrors((prev) => ({ ...prev, state: undefined }));
                    }
                  }}
                />
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                )}
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Zip
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.zip ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="ZIP"
                  type="text"
                  value={zip}
                  onChange={(e) => {
                    setZip(e.target.value);
                    if (errors.zip) {
                      setErrors((prev) => ({ ...prev, zip: undefined }));
                    }
                  }}
                />
                {errors.zip && (
                  <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
                )}
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Country
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.country ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Country"
                  type="text"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    if (errors.country) {
                      setErrors((prev) => ({ ...prev, country: undefined }));
                    }
                  }}
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Phone Number
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.phone ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Phone area code + Phone number"
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) {
                      setErrors((prev) => ({ ...prev, phone: undefined }));
                    }
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

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
