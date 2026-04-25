/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A2540",
        secondary: "#1D4ED8",
        accent: "#C9A227",
        light: "#F8FAFC",
        dark: "#0F172A",
      },
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px -28px rgba(10, 37, 64, 0.45)",
      },
    },
  },
  plugins: [],
};
