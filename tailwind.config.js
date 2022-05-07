const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Manrope', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}
