/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#38b2ac",
          hover: "#2c7a7b",
          dark: "#234e52",
        },
        secondary: {
          DEFAULT: "#1a202c",
          light: "#cbd5e0",
          dark: "#2d3748",
        },
        tertiary: {
          DEFAULT: "#ebfbee",
          dark: "#2d3748",
          light: "#e7f5ff",
        },
        neutral: {
          white: "#ffffff",
        },
        accent: {
          DEFAULT: "#e2e8f0",
        },
      },
      fontSize: {
        sm: ["0.875rem", "1.25rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
      },

      safelist: ["hover:text-teal-500"],
      animation: {
        "border-spin": "spin-border 4s linear infinite",
      },
      keyframes: {
        "spin-border": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
