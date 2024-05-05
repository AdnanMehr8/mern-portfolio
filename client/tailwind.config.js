/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0A192F",
        // "primary": "#12343b",
        // "primary": " #49494b",


        // "secondary": "#F97316",
        // "secondary": "#c89666",
        "secondary": "#bd8c7d",
        // "tertiary": "#54D6BB",
        "tertiary": "#f1f0ee",

      }
    },
    screens: {
      'lg': { 'max': '2023px' },

      'sm': { 'max': '1000px' },

    }
  },
  plugins: [],
}