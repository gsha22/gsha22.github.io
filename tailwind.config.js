/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Respect user's OS preference without requiring a `.dark` class
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        warm: {
          DEFAULT: "#F7F4EE",
          50: "#FBFAF7",
          100: "#F7F4EE",
          200: "#EFE9E0",
        },
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
        offwhite: {
          DEFAULT: "#F2EFE9",
        },
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
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 0.5s ease-in-out',
        fadeOutUp: 'fadeOutUp 0.5s ease-in-out',
        slide: "slide 10s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"], // Default font
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
