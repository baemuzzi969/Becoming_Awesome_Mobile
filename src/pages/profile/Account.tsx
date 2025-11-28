import React, { useState } from "react";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import AccountForm from "../../components/AccountForm";

const Account: React.FC = () => {
  const router = useIonRouter();
  const [accountData, setAccountData] = useState({
    givenName: "bae",
    lastName: "muzzi",
    email: "baemuzzi9699@test.com",
    phoneCountry: "CA",
    phoneCode: "+1",
    phoneNumber: "1565159848",
    addressLine1: "Lenina",
    addressLine2: "Kryzyzowa 18",
    city: "Olianytsia",
    state: "89",
    zipCode: "12345",
    country: "CA Canada",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSave = () => {
    console.log("Account data saved:", accountData);
    // Add API call here to save data to backend
  };

  const handleBack = () => {
    router.push("/tabs/profile/setting");
  };

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] mx-auto pt-16 px-6 overflow-y-auto pb-12">
          <AccountForm
            data={accountData}
            onDataChange={setAccountData}
            onBack={handleBack}
            onSave={handleSave}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
