/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#1E213F',
        font: '#D7E0FF',
        bg_darkBlue: '#0E112A',
        bg_lightBlue: '#2E325A',
      },
      dropShadow: {
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
