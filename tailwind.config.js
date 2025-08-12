/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Playfair Display"', 'serif'],
        body: ['"Nunito"', 'sans-serif'],
      },
      blur: {
        xs: '1.5px',
      },
      colors: {
        lime: {
          75: '#f2f8dcff',
        }
      }
    },
  },
  plugins: [],
}
