/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b', // Zinc-950 for a deeper, more premium dark
        surface: '#18181b',    // Zinc-900 for cards
        primary: {
          DEFAULT: '#818cf8', // Indigo-400
          glow: 'rgba(129, 140, 248, 0.15)',
        },
        muted: '#a1a1aa',     // Zinc-400 for secondary text
        border: 'rgba(255, 255, 255, 0.08)',
        'border-hover': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'], // Kept Outfit for headings, but will apply tight tracking
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      animation: {
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
