/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      grey: "#BFBFBF",
      black06: "#0F0F0F",
      black10: "#1A1A1A",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    backgroundImage: {
      "navbar-head-image":
        "url('./src/assets/images/StreamVibe-Home-Background.png')",
    },
    screens: {
      tablet: "-800px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      xxl: "2.5rem",
    },
    extend: {},
  },
  plugins: [],
};
