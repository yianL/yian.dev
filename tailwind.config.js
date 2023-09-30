/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f7f6",
          100: "#e2e6e1",
          200: "#c6ccc3",
          300: "#a1aa9e",
          400: "#7d897a",
          500: "#616d5f",
          600: "#4c574a",
          700: "#40473e",
          800: "#353b34",
          900: "#2e332e",
          950: "#181b18",
        },
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
