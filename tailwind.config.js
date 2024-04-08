/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/***.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gray: {
        100: "#EEEFF2",
        400: "#AFB5C0",
        500: "#DDDDDD",
      },
    },
  },
  plugins: [],
};
