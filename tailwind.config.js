module.exports = {
  content: [
    "./index.html",
    "./contact.html",
    "./pet-care-software.html",
    "./dog-walking-software-uk.html",
    "./dog-walking-software-no-monthly-fee.html",
    "./dog-walking-software-for-sole-traders.html",
    "./dog-walking-scheduling-software.html",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F5EF",
        "canvas-alt": "#F2F4F6",
        surface: "#FFFFFF",
        primary: "#0033A0",
        "primary-dark": "#00216E",
        ink: "#1A1C2C",
        "ink-secondary": "#444653",
        success: "#2F9E6A",
        outline: "#D4D6E0",
        "app-dark": "#101C2E",
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
