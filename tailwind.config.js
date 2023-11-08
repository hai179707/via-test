/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        orange: "#DCA245",
        lorange: "#FDBA4D",
        green: "#10B981",
        blue: "#0079ED",
        red: "#DC2626",
        gray: "#A0ABBB",
        bgorange: "#D29B42",
        bglorange: "#FFF2F2",
        bggray: "#F7F8F9",
        btngray: "#E7EAEE",
        backdrop: "#0d0f1199"
      },
      fontSize: {
        xxl: "28px",
        xl: "25px",
        lg: "18px",
        nm: "16px",
        sm: "13px",
        xs: "12px"
      },
      spacing: {
        '50': '50%',
      },
      boxShadow: {
        xl: "box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.10);"
      },
      borderRadius: {
        DEFAULT: "4px"
      }
    },
  },
  plugins: [],
}