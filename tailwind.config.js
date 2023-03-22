
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-white': '#ffffff',
        'gray': '#777777'
      },
      dropShadow: {
        '3xl': '0 6px 4px rgba(0, 0, 0, 0.20)',
      }
    },
  },
  plugins: [],
}
