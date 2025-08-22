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
        },
        screens: {
          'xxs': '320px',
          'celular':'360px',
          'xs': '400px',
          'big': '500px',
          'medium':'880px',
          'medium2':'1300px',
          'xbig': '1800px',
        },
    },
  },
  plugins: [],
}
