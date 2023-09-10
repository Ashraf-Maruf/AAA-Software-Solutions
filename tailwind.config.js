/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#F9F9F9",

          "secondary": "#000000",

          "accent": "#163794",

          "neutral": "#1E46B7",

          "base-100": "#FFFFFF",

          "footer-color": "#EAF0FF",
        },
      },
    ],
  },
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },
      'xl2': { 'max': '1450px' },
      'xl1': { 'max': '1366px' },
      'xl': { 'max': '1280px' },
      'lg1': { 'max': '1199px' },
      'lg': { 'max': '1024px' },
      'md2': { 'max': '992px' },
      'md1': { 'max': '896px' },
      'md': { 'max': '768px' },
      'sm1': { 'max': '640px' },
      'sm': { 'max': '575px' },
      'xm4': { 'max': '480px' },
      'xm3': { 'max': '425px' },
      'xm2': { 'max': '393px' },
      'xm1': { 'max': '360px' },
      'xm': { 'max': '320px' }
    },
    extend: {
      fontFamily: {
        DaysOne: ['Days One', 'sans-serif'],
        Arimo: ['Arimo', 'sans-serif']
      },
    },
  },

  plugins: [require("daisyui")],
}
