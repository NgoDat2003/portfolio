/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617', // Rich Navy/Slate
        primary: {
          DEFAULT: '#818cf8', // Indigo-400 (Brighter for dark mode)
          glow: 'rgba(129, 140, 248, 0.4)',
        },
        card: '#0f172a', // Elevated Navy
        border: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
