const { Hls } = require("@mui/icons-material");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        a: "#797eff",
        light: {
          background: { body: "#F7F7F9" },
          primary: { main: "#666CFF", dark: "#666CFF", light: "#787EFF" },
          text: {
            primary: "rgba(76, 78, 100, 0.87)",
            secondary: "rgba(76, 78, 100, 0.68)",
          },
          error: "#ff0e00",
        },
      },
    },
  },
  plugins: [],
};
