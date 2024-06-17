/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28A8BA",
        dark: {
          primary: "#1E9FB1",
          grey: {
            100: "#07090D",
            90: "#14161A",
            80: "#1D1F23",
            70: "#212327",
            60: "#2F3135",
            50: "#717377",
            40: "#8F949E",
          },
        },
        light: {
          primary: "#1E9FB1",
          grey: {
            5: "#F6F6F6",
            10: "#E0F2F2",
            20: "#C4E0E4",
            30: "#A7CDD2",
            40: "#818690",
            50: "#636872",
            100: "#14161A",
          },
        },
        white: "#FFFFFF",
        error: "#EC1414",
        secondary: "#D728CA",
        gradient: "linear-gradient(104.43deg, #28A8BA 2.09%, #D728CA 102.95%)",
      },
    },
  },
  plugins: [],
};
