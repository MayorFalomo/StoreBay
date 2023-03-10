/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      nav: "720px",
      md: "850px",
      lg: "1100px",
      xl: "1440px",
    },
    extend: {
      colors: {
        btnColor: "#FCC776",
        heroColor: "#FAE3B6",
        hover: "#fff",
        hoverBtn: "#fff",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
};
