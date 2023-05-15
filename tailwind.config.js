/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(65, 98, 168)",
      },
    },
  },
  plugins: [],
};
