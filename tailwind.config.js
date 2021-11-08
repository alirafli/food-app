module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
    zIndex: {
      "-1": -1,
    },
    animation: {
      "spin-slow": "bounce 3s linear",
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
