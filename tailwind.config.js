module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FECC4C",
        ternary: "#FE724C",
        ternary2: "#D64822"
      },
      fontFamily: {
        primary: ["Playfair Display, serif"]
      }
    },
    zIndex: {
        '-1': -1
    },
    animation: {
      'spin-slow': 'bounce 3s linear',
     },
  },
  variants: {
    extend: {},

  },
  plugins: [],
}
