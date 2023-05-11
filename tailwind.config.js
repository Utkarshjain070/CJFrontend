/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgimage': "url('../public/bg.png')",
        'footerbg': "url('../public/footerbg.png')",
    },
    

    colors:{
      "logocolor1" : '#004257',
      "logocolor2"  : "#0fc8b5",
    },
    font:{
      

    }
    },
  },
  plugins: [],
}
