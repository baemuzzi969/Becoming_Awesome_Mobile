import React, { useState } from "react";
import { IonPage, IonContent, useIonRouter, IonIcon } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";
import Header from "../components/Header";

const SignUp: React.FC = () => {
  const router = useIonRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
  }>({});

  const handleSignup = () => {
    // Clear any existing errors
    setErrors({});

    let newErrors: { [key: string]: string } = {};
    let hasErrors = false;

    // Validate username
    if (!username || username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long";
      hasErrors = true;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
      hasErrors = true;
    }

    // Validate password
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, proceed with signup
    console.log("Signing up with:", { username, email, password });

    router.push("/profile");
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
        <div className="max-w-[430px] mx-auto pt-16 overflow-y-auto relative">
          <Header />
          <div className="flex flex-row items-center px-6">
            <div className="w-12 h-12 rounded bg-[#282828]"></div>
            <div className="text-2xl font-bold ml-3 text-[#282828] font-roboto">
              Ascension App
            </div>
          </div>
          <div className=" bg-white mt-6 rounded-t-3xl px-6 h-[calc(100vh-136px)]">
            <div className="flex justify-center text-2xl pt-6 text-[#282828] font-bold">
              Create your account
            </div>
            <div className="flex justify-center text-sm text-[#282828] font-normal font-roboto">
              Encouraging message here to join the program
            </div>

            <div className="space-y-4">
              <div className="space-y-2 mt-6">
                <span className="text-sm text-[#282828] font-normal font-roboto">
                  Username
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.username ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Enter your username"
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
                  Email
                </span>
                <input
                  className={`custom-input text-[#282828] text-sm border border-solid ${
                    errors.email ? "border-red-500" : "border-[#A9A9A9]"
                  } rounded-lg w-full p-[10px] outline-none`}
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) {
                      setErrors((prev) => ({ ...prev, email: undefined }));
                    }
                  }}
                />
                {errors.email && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.email}
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

              <span className="text-sm font-normal font-roboto mt-2">
                <a
                  href="#"
                  className="text-sm text-[#282828] font-normal font-roboto underline"
                >
                  Terms & conditions
                </a>
              </span>

              <button
                className="w-full mt-6 rounded-xl p-4 text-white font-medium font-roboto text-sm button-gradient"
                onClick={handleSignup}
              >
                Sign Up
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
                <div className="underline text-sm font-normal font-roboto">
                  Already have an account?{" "}
                  <span
                    onClick={() => router.push("/signin")}
                    className="text-sm font-medium font-roboto"
                  >
                    Sign In
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

export default SignUp;
