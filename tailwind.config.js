/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Raleway", "sans-serif"],
        secondaryFont: ["Roboto", "sans-serif"],
        tertiaryFont: ["Montserrat", "sans-serif"]
      },
      
      colors: {
        primaryColor: '#2F3D40',
        hoverColor: '#878787'
      }
    },
  },
  plugins: [],
}