import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Respect the user's OS preference without requiring a `.dark` class
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans"],
      },
      colors: {
        // Warm off-white background for light mode
        warm: {
          DEFAULT: "#F7F4EE",
          50: "#FBFAF7",
          100: "#F7F4EE",
          200: "#EFE9E0",
        },
        // Deep charcoal for dark backgrounds and near-black text (softened)
        charcoal: {
          DEFAULT: "#393939", // figma dark gray
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#D9D9D9",
          300: "#B3B3B3",
          600: "#2F2F2F",
          700: "#2B2B2B",
          800: "#242424",
          900: "#1D1D1D",
        },
        // Offwhite text for dark mode
        offwhite: {
          DEFAULT: "#F2EFE9",
        },
        // Green accent that persists across modes
        accent: {
          DEFAULT: "#32B366",
          50: "#EAF7F1",
          100: "#D6EFDF",
          200: "#ADE0C0",
          300: "#84D1A2",
          400: "#5BC284",
          500: "#32B366",
          600: "#279054",
          700: "#1D6C41",
          800: "#13492B",
          900: "#0A2616",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
