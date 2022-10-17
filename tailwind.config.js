/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundColor: {
        "primary-green": "#009490",
        "secondary-black": "#212121",
      },
      colors: {
        "primary-green": "#009490",
        "secondary-black": "#212121",
        "therth-gray" : "#B1B1B1",
        "h1-silver": "#D1D1D1",
        "black-a5" : "rgba(0 , 0 , 0 ,0.5)",
      },
      fontSize: {
        "small": "12px",
        "medium": "34px",
        "large": "50px",
      },
      fontWeight: {
        "regular": 400,
        "medium": 500,
        "semiBold": 600,
        "bold": 700,
      },
      width: {
        "widthMax": "1440"
      },
      height: {
        "nav-height": "60px" , 
        "500": "500px",
        "170": "170px"
      },
      fontFamily: {
        "poppins": "'poppins'",
        "bevan": "'bevan'",
        "chamran": "'chamran'",
      }

    },
  },
  plugins: [],
}