/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '648px',
      md: '768px',
      lg: '1024px',
      xl: '1170px'
    },
    maxWidth: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',

    },
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