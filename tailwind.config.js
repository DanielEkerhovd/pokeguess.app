/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,jsx,ts,tsx,mjs}',
    './src/**/*.{html,js,jsx,ts,tsx,mjs}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1E1E1E',
        'dark-hl': '#3D3B40',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
