/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          yellow: '#FFCD00',
          dark: '#111111',
          gray: '#333333',
          light: '#F4F4F4',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
