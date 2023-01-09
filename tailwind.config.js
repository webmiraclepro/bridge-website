/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Exo2' : ['"Exo 2"', 'sans-serif'],
      'Barlow' : ['"Barlow"'],
    },
    letterSpacing:{
      '1': '0.05em',
      '2': '0.2em',
      '3': '0.3em',
      '4': '0.4em',
    },
  },
  plugins: [
  ],
}