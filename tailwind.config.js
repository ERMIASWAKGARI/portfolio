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
          DEFAULT: "#38b2ac", // Teal 500 - Primary color for branding elements like buttons
          hover: "#2c7a7b", // Teal 600 - Hover state for primary buttons
          dark: "#234e52", // Teal 800 - Primary color for dark mode
        },
        secondary: {
          DEFAULT: "#1a202c", // Primary text color in light mode
          light: "#cbd5e0", // Light gray for subtle text or icons
          dark: "#2d3748", // Secondary background in dark mode
        },
        tertiary: {
          DEFAULT: "#f7fafc", // Gray 100 - Background for light mode
          dark: "#2d3748", // Gray 800 - Background for dark mode
        },
        neutral: {
          white: "#ffffff", // White backgrounds and text
        },
        accent: {
          DEFAULT: "#e2e8f0", // Accent color for icons or highlights
        },
      },
      fontSize: {
        sm: ["0.875rem", "1.25rem"], // Small text
        base: ["1rem", "1.5rem"], // Default
        lg: ["1.125rem", "1.75rem"], // Large text
        xl: ["1.25rem", "1.75rem"], // Extra large
      },

      safelist: [
        "hover:text-teal-500",
        // Add more hover color classes here as needed
      ],
    },
  },
  plugins: [],
};
