/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  fontFamily: {
    robotoLight: ["Roboto-Light", "sans-serif"],
    robotoNormal: ["Roboto-Normal", "sans-serif"],
    robotoMedium: ["Roboto-Medium", "sans-serif"],
    robotoBold: ["Roboto-Bold", "sans-serif"],
    robotoBlack: ["Roboto-Black", "sans-serif"],
  },
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideUp: "slideUp 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
