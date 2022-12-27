/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#162033",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
