/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sans', 'sans-serif']
      },
      boxShadow: {
        'sidebar-shadow': ['0px 12px 18px rgba(11, 91, 220, 0.1)']
      }
    },
  },
  plugins: [],
}
