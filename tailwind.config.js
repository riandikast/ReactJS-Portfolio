/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google': ['Poppins', 'sans-serif'] 
      },
      colors: {
        'github-blue': '#161b22',
        'github-darker-blue': '#0d1117',
        'github-medium-blue': '#394c5d',
        'github-light-blue': '#394c5d',
        'github-grey': '#8b9095',
        'github-darker-grey': '#21262c',
        'github-another-grey': '#c9d1d9',
        'github-other-blue': '#58a6ff',
        'search' : '#0d1117',
        'github-border' : '#30363d',
      
      },
      screens: {
        'm685': {'min': '0px', 'max': '685px'},
        'min685': {'min': '685px'},
        'min501': {'min': '501px'},
        'max500': {'max': '500px'},
        'max320': {'max': '320px'},
      },
      width: {
        '128': '520px',
        '370': '370px',
        '540': '540px',
        '270': '270px',
      },
      height: {
        '128': '520px',
        '300': '300px',
        '370': '370px',
        '540': '540px',
        '270': '270px',
      },
      margin: {
      
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
