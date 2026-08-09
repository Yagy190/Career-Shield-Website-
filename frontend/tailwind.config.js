/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6", // Vibrant Violet
        secondary: "#ec4899", // Vibrant Pink
        accent: "#06b6d4", // Cyan
        background: "#09090b", // Deep dark
        surface: "#18181b", // Zinc 900 for cards
        foreground: "#f8fafc",
      }
    },
  },
  plugins: [],
}
