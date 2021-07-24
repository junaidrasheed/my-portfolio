const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      truegray: colors.trueGray,
      red: colors.red,
    },
    extend: {
      fontFamily: {
        source: ['"Source Code Pro"'],
      },
      skew: {
        "25": "25deg",
        "-25": "-25deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
