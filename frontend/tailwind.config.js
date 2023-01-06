/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,html}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      lineHeight: {
        12: '3rem'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tw-elements/dist/plugin')]
};
