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
        showLogo: "showLogo .8s ease-in .8s forwards",
        yellowGradient: "yellowGradient 10s ease-in-out 1s forwards",
      },
      keyframes: {
        expand: {
          "0%": {
            transform: "translate(-50%, -50%) scale(0)",
            borderRadius: "50%",
            zIndex: "1",
          },
          "40%": {
            zIndex: "1",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(1)",
            borderRadius: "50%",
            width: "200vmax",
            height: "200vmax",
            zIndex: "0",
          },
        },
        showLogo: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        yellowGradient: {
          "0%": {
            background: "rgb(255,248,56)",
            background:
              "radial-gradient(circle, rgba(255,248,56,1) 40%, rgba(102,102,102,0.8) 80%, rgba(0,0,0,0) 100%)",
            opacity: "0",
          },
          "50%": {
            background: "rgb(255,248,56)",
            background:
              "radial-gradient(circle, rgba(255,248,56,1) 40%, rgba(102,102,102,0.8) 80%, rgba(0,0,0,0) 100%)",
            opacity: "1",
          },
          "80%": {
            background: "rgb(255,248,56)",
            background:
              "radial-gradient(circle at top left, rgba(255,248,56,1) 25%, rgba(102,102,102,0.8) 65%, rgba(0,0,0,0) 100%)",
          },
          "100%": {
            background: "rgb(255,248,56)",
            background:
              "radial-gradient(circle at center left, rgba(255,248,56,1) 25%, rgba(102,102,102,0.8) 65%, rgba(0,0,0,0) 100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
