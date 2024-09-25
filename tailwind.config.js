/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        primaryGradient: "linear-gradient(90deg, rgba(245,28,39,1) 0%, rgba(157,21,33,1) 100%)",
        whiteGradient: "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)",
        cardBackgroundGradient: "radial-gradient(circle at 10% 20%, rgb(255, 197, 118) 0%, rgb(254, 106, 103) 47.7%, rgb(240, 23, 23) 92.3%)",
        cardBackgroundGradient2: "radial-gradient(circle at 10% 20%, rgb(240, 23, 23)  0%, rgb(254, 106, 103) 47.7%, rgb(255, 197, 118) 92.3%)",
      },
      colors: {
        primary: "#f51c27",
        secondary: "#9d1521",
        titleColor: "#0a2540",
        textColor: "#425466"
      },
    },
  },
  plugins: [],
};
