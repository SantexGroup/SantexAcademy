/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'lobster': ['Lobster', 'cursive'],
      'farro': ['Farro', 'sans-serif'],
    },
    extend: {
      colors: {
        'azul-bg': '#1F51B1', // Color del background general
        'azul-button': '#131174', // Color de los botones (iniciar - usuarios - estadisticas - etc)
      },
    },
  },
  plugins: [],
}
