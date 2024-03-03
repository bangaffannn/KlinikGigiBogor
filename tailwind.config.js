/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#bce484",
        secondary: "#8ec26a",
        tertiary: "#64a94e",
        accent: "#f5ffd6",
      },
      fontFamily: {
        sans: ["Roboto", "Montserrat", "sans-serif"],
        serif: ["Suranna"],
      },
      backgroundImage: {
        site: "url('./assets/10.jpg')",
      },
      plugins: [],
    },
  },
};
