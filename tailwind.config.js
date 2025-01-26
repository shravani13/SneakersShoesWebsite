/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange': 'hsl(26, 100%, 55%)',
        'paleOrange': 'hsl(25, 100%, 94%)',
        'darkBlue': 'hsl(220, 13%, 13%)',
        'darkGrayishBlue': 'hsl(219, 9%, 45%)',
        'GrayishBlue': 'hsl(220, 14%, 75%)',
        'LightGrayishBlue' : 'hsl(223, 64%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
        'Black': 'hsl(0, 0%, 0%)',
        'BlackOp': 'rgb(0,0,0,0.75)'
      },
      fontFamily:{
          'kumbhSans': ['Kumbh Sans']
      }
    },
  },
  plugins: [],
}

