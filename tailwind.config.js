const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alt: ["Open Sans", "sans-serif"],
        base: ["Cormorant Upright", "serif"],
      },
    },
    colors: {
      ...colors,
      custom: {
        bg: "#1f1f38",
        bg_variant: "#2c2c6c",
        primary: "#4db5ff",
        primary_variant: "rgba(77,181,255,0.4)",
        white: "#ffff",
        light: "rgba(255,255,255,0.6)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
