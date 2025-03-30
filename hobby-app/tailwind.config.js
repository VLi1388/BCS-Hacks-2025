/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'], // pixel font
      },
      colors: {
        'game-green': '#59B26C', // custom green
        'game-black': '#222222',
        'game-blue': '#3b82f6',
        'game-red': '#B9645E',
      },
      boxShadow: {
        pixel: '4px 4px 0 #000', // blocky retro shadow
      },
    },
  },
  plugins: [],
};