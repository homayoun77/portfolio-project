/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        gradient1: 'rgba(112,157,255,0.1)',
        gradient2: 'hsla(242,74%,61%,0.1)'
      }
    },
  },
  plugins: [],
}

