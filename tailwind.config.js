/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{html,js}"],
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
        showLogo: "showLogo 2.8s ease-in .8s forwards",
        yellowGradient: "yellowGradient 4s ease-in-out 1s forwards",
        hideIntro: "hideIntro 5s ease-in-out forwards",
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
          "30%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        yellowGradient: {
          "0%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 20%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
            backgroundSize: "200% 200%",
            backgroundPosition: "50% 50%",
            opacity: "0",
          },
          "40%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 20%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
            backgroundSize: "200% 200%",
            backgroundPosition: "50% 50%",
            opacity: "1",
          },
          "65%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 20%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 100%",
            opacity: "1",
          },
          "66%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 19.5%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "68%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 19%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "69%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 18.5%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "70%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 18%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "72%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 17.5%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "73%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 17%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "75%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 16.5%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "76%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 16%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "78%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 15.5%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "80%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 15%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 100%",
          },
          "82%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 14.5%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "84%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 14%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "86%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 13.5%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "88%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 13%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "90%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 12.5%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "92%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 12%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "94%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 11.5%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "96%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 11%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "98%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 10.5%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
          },
          "100%": {
            backgroundImage:
              "radial-gradient(circle, rgba(255,248,56,1) 10%, rgba(102,102,102,0.8) 50%, rgba(0,0,0,0) 100%)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 50%",
          },
        },
        hideIntro: {
          "0%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            visibility: "hidden"
          },
        },
      },
    },
  },
  plugins: [],
};
