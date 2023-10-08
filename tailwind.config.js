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
      keyframes: {
        tick: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 15%, 100%": {
            rx: 10,
            ry: 10,
            transform: "scaleY(1)",
          },
          "5%": {
            rx: 0,
            ry: 0,
            transform: "scaleY(0.1)",
          },
        },
      },
      animation: {
        tick: "tick 180s steps(60) infinite",
        blink: "blink 5s ease-out infinite",
      },
    },
  },
  plugins: [],
};
