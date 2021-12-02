module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      '0': '0',
     '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
     '95': '.95',
      '100': '1',
     '105': '1.05',
     '110': '1.1',
      '125': '1.25',
      '150': '1.5',
     '200': '2',
    },
    extend: {
      colors: {
        primary: "#FECC4C",
        ternary: "#FE724C",
        ternary2: "#D64822",
      },
      fontFamily: {
        primary: ["Playfair Display, serif"],
      },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      primary: "0 4px 25px 0 rgba(254, 204, 76, 1)",
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      box: '0px 5px 15px rgba(0, 0, 0, 0.35)',
    },
    zIndex: {
      "-1": -1,
      "1": 1,
    },
    screens: {
      sm: {max: "519px" },
      md: { min: "520px", max: "769px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px"},
      "2xl": { min: "1536px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
