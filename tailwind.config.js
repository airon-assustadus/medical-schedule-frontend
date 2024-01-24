/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#EFF7F1',
        'primary-text': '#516D7D',
        'primary-dark': '#63B77D',
        'primary-dark-text': '#FFFFFF',
        secondary: '#eef8f1',
        danger: '#b33930'
      }
    },

  },
  plugins: [],
};
