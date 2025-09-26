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
          '0%, 80%, 100%': { transform: 'translateX(0)' }, // parado antes e depois
          '85%, 87%, 89%, 91%, 93%, 95%': { transform: 'translateX(-5px)' },
          '86%, 88%, 90%, 92%, 94%, 96%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        'shake-once': 'shake 2s ease-in-out 1',
        'shake-every-10s': 'shake 10s ease-in-out infinite',
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
