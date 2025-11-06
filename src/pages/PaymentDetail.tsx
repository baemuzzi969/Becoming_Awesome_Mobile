import React, { useState } from "react";
import { IonPage, IonContent, IonIcon, useIonRouter } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import Header from "../components/Header";

const PaymentDetail: React.FC = () => {
  const router = useIonRouter();
  const [securityCode, setSecurityCode] = useState("");
  const [showSecurityCode, setShowSecurityCode] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [cityVal, setCityVal] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [zipVal, setZipVal] = useState("");
  const [countryVal, setCountryVal] = useState("");

  const [errors, setErrors] = useState<{
    cardNumber?: string;
    expDate?: string;
    securityCode?: string;
    nameOnCard?: string;
    billingAddress?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  }>({});

  const handleContinue = () => {
    const newErrors: { [key: string]: string } = {};
    let hasErrors = false;

    // Card number: digits only, 13-19 digits after removing spaces
    const digitsOnly = cardNumber.replace(/\s+/g, "");
    if (!digitsOnly || !/^\d{13,19}$/.test(digitsOnly)) {
      newErrors.cardNumber = "Invalid card number";
      hasErrors = true;
    }

    // Expiration date: MM/YY or MM/YYYY and not expired
    const expRegex = /^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;
    if (!expDate || !expRegex.test(expDate.trim())) {
      newErrors.expDate = "Invalid expiration date (MM/YY or MM/YYYY)";
      hasErrors = true;
    } else {
      // check not expired
      const parts = expDate.split("/");
      const month = parseInt(parts[0], 10);
      let year = parseInt(parts[1], 10);
      if (parts[1].length === 2) {
        // assume 20xx for 2-digit years
        year += 2000;
      }
      const exp = new Date(year, month, 0, 23, 59, 59);
      const now = new Date();
      // set to end of month
      if (exp < now) {
        newErrors.expDate = "Card is expired";
        hasErrors = true;
      }
    }

    // Security code: 3 or 4 digits
    if (!securityCode || !/^\d{3,4}$/.test(securityCode.trim())) {
      newErrors.securityCode = "Invalid security code";
      hasErrors = true;
    }

    // Name on card
    if (!nameOnCard.trim()) {
      newErrors.nameOnCard = "Name on payment method is required";
      hasErrors = true;
    }

    // Billing address
    if (!billingAddress.trim()) {
      newErrors.billingAddress = "Billing address is required";
      hasErrors = true;
    }

    // City
    if (!cityVal.trim()) {
      newErrors.city = "City is required";
      hasErrors = true;
    }

    // State
    if (!stateVal.trim()) {
      newErrors.state = "State is required";
      hasErrors = true;
    }

    // ZIP (simple US format check)
    if (!zipVal.trim()) {
      newErrors.zip = "ZIP code is required";
      hasErrors = true;
    } else if (!/^\d{5}(-\d{4})?$/.test(zipVal.trim())) {
      newErrors.zip = "Invalid ZIP code format";
      hasErrors = true;
    }

    // Country
    if (!countryVal.trim()) {
      newErrors.country = "Country is required";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // All validations passed — proceed to onboarding
    setErrors({});
    router.push("/tabs/program/welcome", "forward", "replace");
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
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.cardNumber ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="1234 1234 1234 1234"
                  type="number"
                  value={cardNumber}
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                    if (errors.cardNumber)
                      setErrors((prev) => ({ ...prev, cardNumber: undefined }));
                  }}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.cardNumber}
                  </p>
                )}
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Expiration Date
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.expDate ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Sample Expiration Date"
                  type="text"
                  value={expDate}
                  onChange={(e) => {
                    setExpDate(e.target.value);
                    if (errors.expDate)
                      setErrors((prev) => ({ ...prev, expDate: undefined }));
                  }}
                />
                {errors.expDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.expDate}</p>
                )}
              </div>

              <div className="relative space-y-2">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Security Code
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.securityCode ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="**********"
                  type={showSecurityCode ? "number" : "passwords"}
                  value={securityCode}
                  onChange={(e) => {
                    setSecurityCode(e.target.value ?? "");
                    if (errors.securityCode)
                      setErrors((prev) => ({
                        ...prev,
                        securityCode: undefined,
                      }));
                  }}
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1"
                  onClick={() => setShowSecurityCode(!showSecurityCode)}
                >
                  <IonIcon
                    icon={showSecurityCode ? eyeOffOutline : eyeOutline}
                    className="w-6 h-5 text-[#282828]"
                  />
                </button>
              </div>
              {errors.securityCode && (
                <p className="text-red-500 text-xs">{errors.securityCode}</p>
              )}

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828]  font-normal font-roboto">
                  Name on payment method
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.nameOnCard ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Sample name on payment method"
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => {
                    setNameOnCard(e.target.value);
                    if (errors.nameOnCard)
                      setErrors((prev) => ({ ...prev, nameOnCard: undefined }));
                  }}
                />
                {errors.nameOnCard && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.nameOnCard}
                  </p>
                )}
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Billing address
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.billingAddress
                      ? "border-red-500"
                      : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Sample billing address"
                  type="text"
                  value={billingAddress}
                  onChange={(e) => {
                    setBillingAddress(e.target.value);
                    if (errors.billingAddress)
                      setErrors((prev) => ({
                        ...prev,
                        billingAddress: undefined,
                      }));
                  }}
                />
                {errors.billingAddress && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.billingAddress}
                  </p>
                )}
              </div>

              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  City
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.city ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Sample City"
                  type="text"
                  value={cityVal}
                  onChange={(e) => {
                    setCityVal(e.target.value);
                    if (errors.city)
                      setErrors((prev) => ({ ...prev, city: undefined }));
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
                  placeholder="Sample state"
                  type="text"
                  value={stateVal}
                  onChange={(e) => {
                    setStateVal(e.target.value);
                    if (errors.state)
                      setErrors((prev) => ({ ...prev, state: undefined }));
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
                  placeholder="Zip"
                  type="text"
                  value={zipVal}
                  onChange={(e) => {
                    setZipVal(e.target.value);
                    if (errors.zip)
                      setErrors((prev) => ({ ...prev, zip: undefined }));
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
                  value={countryVal}
                  onChange={(e) => {
                    setCountryVal(e.target.value);
                    if (errors.country)
                      setErrors((prev) => ({ ...prev, country: undefined }));
                  }}
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
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
