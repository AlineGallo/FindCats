/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        a_primary: '#877F72',
        a_secondary: '#60412C',
        a_ligth: '#FFFAF5'
      },
    },
  },
  plugins: [],
}
