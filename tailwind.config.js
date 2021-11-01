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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
