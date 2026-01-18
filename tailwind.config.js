/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Software Mode
        soft: { bg: '#ffffff', text: '#0f172a', accent: '#3b82f6' },
        // Game Mode
        game: { bg: '#050505', text: '#e2e8f0', accent: '#ff0055' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'], // For the Game profile
      },
    },
  },
  plugins: [],
}