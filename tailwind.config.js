/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor : {
        'color' : 'rgb(12 2 143)'
      }
    },
    fontFamily : {
      'hero-font' : 'Sriracha'
    }
  },
  plugins : [],
}

