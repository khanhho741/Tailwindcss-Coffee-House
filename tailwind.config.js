/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#696969',
        'coffee': {
          50:  '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        }
      },
      keyframes: {
        sildeDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        sildeDown: 'sildeDown .4s ease-in-out',
      },
      backgroundImage: {
        'slider-bg': 'url("./image/banner1.gif")'
      }
    },
  },
  plugins: [],
}

