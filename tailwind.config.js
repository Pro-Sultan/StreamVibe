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
        'navbar-head-image': "url('./src/assets/images/StreamVibe-Home-Background.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    extend: {},
  },
  plugins: [],
};
