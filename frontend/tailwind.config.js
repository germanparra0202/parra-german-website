/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3B82F6', // Electric Blue Light
          DEFAULT: '#2563EB', // Electric Blue (#2563EB)
          dark: '#1D4ED8', // Electric Blue Dark
        },
        teal: {
          light: '#2DD4BF', // Sleek Teal Light
          DEFAULT: '#0D9488', // Sleek Teal (#0D9488)
          dark: '#0F766E', // Sleek Teal Dark
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
