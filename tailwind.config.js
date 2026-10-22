/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9D6B34', // cor primária da marca (botões, CTAs, destaques)
          dark: '#825727',
          light: '#C9955C', // tom mais claro para texto pequeno sobre fundo escuro (contraste AA)
        },
        secondary: {
          DEFAULT: '#a4adb8', // cor secundária (botões secundários, badges, hovers)
          light: '#c3c9d1',
        },
        ink: {
          950: '#0c0d10',
          900: '#121418',
          800: '#1a1d23',
          700: '#262a32',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
