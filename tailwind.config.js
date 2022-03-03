module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minWidth: {
      '2xl': '42rem',
    },
    extend: {
      boxShadow: {
        'lg-top': '0 -5px 15px -6px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [],
}
