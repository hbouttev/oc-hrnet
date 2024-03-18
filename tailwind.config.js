/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Avenir', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        primary: '#2c3e50',
        secondary: '#222222',
        tertiary: '#00bc77',
        dark: '#12002b',
      },
    },
  },
  plugins: [],
};
