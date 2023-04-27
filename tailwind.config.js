/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container :{
      padding : '16px',
      center : true,

    },
    extend: {
      screens:{
        '2xl' : '1320'
      },colors : {
        primary : '#3D92D2',
        secondary : '#DDF1FF',
        third : '#119DFF',
        dark2 : '#3B4046',
      },
    },
  },
  plugins: [],
}
