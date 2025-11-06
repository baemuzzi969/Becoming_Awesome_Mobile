import React, { useState } from "react";
import { IonPage, IonContent, useIonRouter, IonIcon } from "@ionic/react";
import { eyeOutline, eyeOffOutline, checkbox } from "ionicons/icons";
import Header from "../components/Header";

const SignIn: React.FC = () => {
  const router = useIonRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const handleSignin = async () => {
    const newErrors: { username?: string; password?: string } = {};

    if (!username) {
      newErrors.username = "Email or username is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Here you would typically validate credentials with your backend
    // For now, we'll just navigate to the profile page
    router.push("/tabs/program");
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
  };

  const handleAppleSignIn = () => {
    // Handle Apple sign in
  };

  return (
    <IonPage>
      <IonContent>
        <div className="max-w-[430px] h-full mx-auto pt-16 overflow-y-auto relative">
          <Header />
          <div className="h-full">
            <div className="flex flex-row items-center px-6">
              <div className="w-12 h-12 rounded bg-[#282828]"></div>
              <div className="text-2xl font-bold ml-3 text-[#282828] font-roboto">
                Ascension App
              </div>
            </div>
            <div className=" bg-white mt-6 rounded-t-3xl px-6 h-[calc(100vh-136px)]">
              <div className="flex justify-center text-2xl pt-6 text-[#282828] font-bold">
                Sign in to your account
              </div>
              <div className="flex justify-center text-sm text-[#282828] font-normal font-roboto">
                Welcome back to Awesome community
              </div>

              <div className="space-y-4">
                <div className="space-y-2 mt-6">
                  <span className="text-sm text-[#282828] font-normal font-roboto">
                    Email or Username
                  </span>
                  <input
                    className={`custom-input text-[#282828] text-sm border border-solid ${
                      errors.username ? "border-red-500" : "border-[#A9A9A9]"
                    } rounded-lg w-full p-[10px] outline-none`}
                    placeholder="Enter your email or username"
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (errors.username) {
                        setErrors((prev) => ({ ...prev, username: undefined }));
                      }
                    }}
                  />
                  {errors.username && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.username}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <span className="text-sm text-[#282828] font-normal font-roboto">
                    Password
                  </span>
                  <div className="relative">
                    <input
                      className={`custom-input text-[#282828] text-sm border border-solid ${
                        errors.password ? "border-red-500" : "border-[#A9A9A9]"
                      } rounded-lg w-full p-[10px] outline-none`}
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) {
                          setErrors((prev) => ({
                            ...prev,
                            password: undefined,
                          }));
                        }
                      }}
                    />
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <IonIcon
                        icon={showPassword ? eyeOffOutline : eyeOutline}
                        className="w-6 h-5 text-[#282828]"
                      />
                    </button>
                  </div>
                  {errors.password && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="w-full flex flex-row justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mr-2 accent-[#1D1B20] rounded"
                    />
                    <span className="text-sm font-normal font-roboto">
                      Remember me
                    </span>
                  </label>
                  <div className="text-sm font-normal font-roboto underline">
                    Forgot your password?
                  </div>
                </div>

                <button
                  className="w-full mt-6 rounded-xl p-4 text-white font-medium font-roboto text-sm button-gradient"
                  onClick={handleSignin}
                >
                  Sign In
                </button>

                <div className="relative py-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t text-[#A9A9A9]"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-[#282828]">
                      Or
                    </span>
                  </div>
                </div>

                <button
                  className="flex flex-row w-full p-4 justify-center items-center gap-2 border border-solid border-[#A9A9A9] rounded-xl"
                  onClick={handleGoogleSignIn}
                >
                  <img
                    src="/assets/icon/google.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span className="text-base font-medium font-roboto">
                    Sign in with Google
                  </span>
                </button>

                <button
                  className="flex flex-row w-full p-4 justify-center items-center gap-2 border border-solid border-[#A9A9A9] rounded-xl"
                  onClick={handleAppleSignIn}
                >
                  <img
                    src="/assets/icon/apple.png"
                    alt="Apple"
                    className="w-5 h-5"
                  />
                  <span className="text-base font-medium font-roboto">
                    Sign in with Apple
                  </span>
                </button>

                <div className="text-center mt-6 pb-12">
                  <span className="underline text-sm font-normal font-roboto">
                    Don't have an account?{" "}
                    <span
                      onClick={() => router.push("/signup")}
                      className="text-sm font-medium font-roboto"
                    >
                      Sign Up
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
