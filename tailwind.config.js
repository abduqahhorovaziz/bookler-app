/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        'tab': 'tab .2s ease-in'
      },
      keyframes: {
        tab: {
          '0%': {opacity:0 },
          '100%': { opacity:100 },
        }
      },
      fontFamily: {
        'open': ['Open Sans', 'sans-serif']
      },
      boxShadow: {
        'sidebar-shadow': ['0px 12px 18px rgba(11, 91, 220, 0.1)'],
        'tab-shadow': ['0px 20px 40px rgba(0, 0, 0, 0.04)'],
        'tag-shadow': ['0px 15px 30px rgba(255, 255, 255, 0.0960719'],
      }
    },
  },
  plugins: [],
}
