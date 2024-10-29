/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,mjs}',
    './game/**/*.{html,js,mjs}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1E1E1E',
        'dark-hl': '#3D3B40',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
