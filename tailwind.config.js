module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        source: ['"Source Code Pro"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
