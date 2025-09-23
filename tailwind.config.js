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
          'medium3':'1420px',
          'xbig': '1800px',
        },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        'shake-once': 'shake 0.8s ease-in-out 1',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '::-webkit-scrollbar': { display: 'none' },
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
      })
    },
  ],
}
