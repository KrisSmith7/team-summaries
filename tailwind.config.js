const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    ['./src/*.{html,js}'],
    ['./util/*.{html,js}'],
    ['./test.html']

  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
    },
  },
  plugins: [],
}
}
