/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,jsx,ts,tsx,mjs}",
    "./src/**/*.{html,js,jsx,ts,tsx,mjs}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#3D3B40'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

