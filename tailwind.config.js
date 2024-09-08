/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#1E213F',
        font: '#D7E0FF',
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
