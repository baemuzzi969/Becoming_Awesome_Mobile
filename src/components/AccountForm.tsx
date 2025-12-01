import React, { useState, useRef, useEffect } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IonIcon } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";

interface AccountData {
  givenName: string;
  lastName: string;
  email: string;
  phoneCountry: string;
  phoneCode: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface AccountFormProps {
  data: AccountData;
  onDataChange: (updatedData: AccountData) => void;
  onBack: () => void;
  onSave: () => void;
}

const AccountForm: React.FC<AccountFormProps> = ({
  data,
  onDataChange,
  onBack,
  onSave,
}) => {
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmpassword] = useState(false);

  const handleFieldChange = (field: keyof AccountData, value: string) => {
    onDataChange({
      ...data,
      [field]: value,
    });
  };

  const handleCountrySelect = (country: string) => {
    handleFieldChange("country", country);
    setIsCountryDropdownOpen(false);
    setCountrySearchTerm("");
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isCountryDropdownOpen]);

  return (
    <div>
      <div className="flex items-center gap-3 mb-3 h-12">
        <button onClick={onBack} className="text-lg font-bold text-[#282828]">
          <img src="/assets/icon/back.png" alt="back" />
        </button>
        <div className="text-2xl font-bold font-robotoBold text-[#282828]">
          Account
        </div>
      </div>

      <div className="bg-white border border-[#A9A9A9] rounded-lg p-4 mb-6">
        <div className="flex flex-col items-start mb-4">
          <div className="text-base font-bold text-[#282828] font-robotobold">
            Personal Information
          </div>
          <div className="text-xs text-[#585858] font-robotomedium">
            Update your personal details
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
              Given name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={data.givenName}
              onChange={(e) => handleFieldChange("givenName", e.target.value)}
              className="w-full border border-[#A9A9A9] rounded-lg p-[10px] text-sm text-[#282828] font-robotomedium focus:outline-none focus:border-[#282828]"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
              Last name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={data.lastName}
              onChange={(e) => handleFieldChange("lastName", e.target.value)}
              className="w-full border border-[#A9A9A9] rounded-lg p-[10px] text-sm text-[#282828]  font-robotomedium focus:outline-none focus:border-[#282828]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#A9A9A9] rounded-lg p-4 mb-6">
        <div className="flex flex-col items-start mb-4">
          <div className="text-base font-bold text-[#282828] font-robotobold">
            Contact Information
          </div>
          <div className="text-xs text-[#585858]">How can we reach you?</div>
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold text-[#282828] font-robotobold mb-2">
            Email Address
          </label>
          <div className="flex items-center border border-[#A9A9A9] rounded-lg p-[10px]">
            <input
              type="email"
              value={data.email}
              placeholder="Enter your email"
              onChange={(e) => handleFieldChange("email", e.target.value)}
              className="flex-1 bg-transparent text-sm text-[#282828] font-robotomedium focus:outline-none focus:border-[#282828]"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
            Phone Number
          </label>
          <div>
            <PhoneInput
              international
              defaultCountry="US"
              value={data.phoneNumber}
              onChange={(value) => {
                // value is in E.164 format (e.g. +14155552671) or undefined
                handleFieldChange("phoneNumber", value || "");
              }}
              onCountryChange={(country) => {
                if (country) handleFieldChange("phoneCountry", country);
              }}
              className="w-full border border-[#A9A9A9] rounded-lg px-2 text-sm text-[#282828] focus:outline-none font-robotomedium"
              inputComponent={({ className, ...rest }: any) => (
                <input
                  {...rest}
                  className={`${className} w-full border-none p-[10px] text-sm text-[#282828] font-robotomedium focus:outline-none focus:border-[#282828]`}
                />
              )}
            />
            {!isValidPhoneNumber(data.phoneNumber || "") && data.phoneNumber ? (
              <p className="text-xs text-red-500 mt-1">Invalid phone number</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#A9A9A9] rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3 mb-4">
          <div>
            <h2 className="text-base font-bold text-[#282828] font-robotobold">
              Address Information
            </h2>
            <p className="text-xs text-[#585858]">Your residential address</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
            Address line 1
          </label>
          <input
            type="text"
            value={data.addressLine1}
            onChange={(e) => handleFieldChange("addressLine1", e.target.value)}
            className="w-full border border-[#A9A9A9] rounded-lg p-[10px] text-sm text-[#282828] focus:outline-none focus:border-[#282828] font-robotomedium"
          />
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
            Address line 2 <span className="text-[#585858]">(Optional)</span>
          </label>
          <input
            type="text"
            value={data.addressLine2}
            onChange={(e) => handleFieldChange("addressLine2", e.target.value)}
            className="w-full border border-[#A9A9A9] rounded-lg p-[10px] text-sm text-[#282828] focus:outline-none focus:border-[#282828] font-robotomedium"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
              City
            </label>
            <input
              type="text"
              value={data.city}
              onChange={(e) => handleFieldChange("city", e.target.value)}
              className="w-full border border-[#A9A9A9] rounded-lg p-[10px] text-sm text-[#282828] focus:outline-none focus:border-[#282828] font-robotomedium"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
              State / Province
            </label>
            <input
              type="text"
              value={data.state}
              onChange={(e) => handleFieldChange("state", e.target.value)}
              className="w-full border border-[#A9A9A9] rounded-lg p-[10px] text-sm text-[#282828] focus:outline-none focus:border-[#282828] font-robotomedium"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
              Zip / Postal Code
            </label>
            <input
              type="text"
              value={data.zipCode}
              onChange={(e) => handleFieldChange("zipCode", e.target.value)}
              className="w-full border border-[#A9A9A9] rounded-lg p-[10px] text-sm text-[#282828] focus:outline-none focus:border-[#282828] font-robotomedium"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
              Country
            </label>
            <select
              value={data.country}
              onChange={(e) => handleFieldChange("country", e.target.value)}
              className="w-full border border-[#A9A9A9] rounded-lg p-[10px] text-sm text-[#282828] focus:outline-none focus:border-[#282828] font-robotomedium"
            >
              <option value="CA Canada">CA Canada</option>
              <option value="US USA">US USA</option>
              <option value="MX Mexico">MX Mexico</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#A9A9A9] rounded-lg p-4 mb-6">
        <div className="flex flex-col items-start mb-4">
          <div className="text-base font-bold text-[#282828]">
            Security & Password
          </div>
          <div className="text-xs text-[#585858] font-robotomedium">
            Change your password
          </div>
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
            Current Password
          </label>
          <div className="flex items-center border border-[#A9A9A9] rounded-lg p-[10px] relative">
            <input
              placeholder="Enter current password"
              type={showCurrentPassword ? "text" : "password"}
              value={data.currentPassword}
              onChange={(e) =>
                handleFieldChange("currentPassword", e.target.value)
              }
              className="flex-1 bg-transparent text-sm text-[#282828] focus:outline-none font-robotomedium custom-input focus:border-[#282828]"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              <IonIcon
                icon={showCurrentPassword ? eyeOffOutline : eyeOutline}
                className="w-6 h-5 text-[#282828]"
              />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
            New Password
          </label>
          <div className="flex items-center border border-[#A9A9A9] rounded-lg p-[10px] relative">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={data.newPassword}
              onChange={(e) => handleFieldChange("newPassword", e.target.value)}
              className="flex-1 bg-transparent text-sm text-[#282828] focus:outline-none font-robotomedium custom-input"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              <IonIcon
                icon={showNewPassword ? eyeOffOutline : eyeOutline}
                className="w-6 h-5 text-[#282828]"
              />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
            Confirm New Password
          </label>
          <div className="flex items-center border border-[#A9A9A9] rounded-lg p-[10px] relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={data.confirmPassword}
              onChange={(e) =>
                handleFieldChange("confirmPassword", e.target.value)
              }
              className="flex-1 bg-transparent text-sm text-[#282828] focus:outline-none font-robotomedium custom-input"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowConfirmpassword(!showConfirmPassword)}
            >
              <IonIcon
                icon={showConfirmPassword ? eyeOffOutline : eyeOutline}
                className="w-6 h-5 text-[#282828]"
              />
            </button>
          </div>
        </div>
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-xs font-bold text-[#282828] mb-2 font-robotobold">
            Password Requirements:
          </p>
          <ul className="text-xs text-[#585858] font-robotomedium space-y-1 list-disc list-inside">
            <li>At least 8 characters long</li>
            <li>Contains uppercase and lowercase letters</li>
            <li>Includes at least one number</li>
          </ul>
        </div>
        <button className="w-full text-sm text-white font-bold font-robotobold py-3 rounded-lg button-gradient">
          Update Password
        </button>
      </div>

      <button
        onClick={onSave}
        className="w-full text-sm text-white font-bold font-robotobold py-3 rounded-lg button-gradient"
      >
        Save Changes
      </button>
    </div>
  );
};

export default AccountForm;
