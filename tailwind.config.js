/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFF838",
      },
      fontFamily: {
        sans: ["Source Serif 4", "sans-serif"],
      },
      animation: {
        expand: "expand 1.4s ease-in forwards",
        showLogo: "showLogo 2s ease-in .8s forwards",
      },
      keyframes: {
        expand: {
          "0%": {
            transform: "translate(-50%, -50%) scale(0)",
            borderRadius: "50%",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(1)",
            borderRadius: "50%",
            width: "200vmax",
            height: "200vmax",
          },
        },
        showLogo: {
          "0%": {
            visibility: "hidden",
            opacity: "0",
          },
          "100%": {
            visibility: "visible",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
