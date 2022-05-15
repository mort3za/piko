module.exports = {
  jit: true,
  darkMode: "class",
  content: [
    "./public/**/*.html",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.ts",
    // "./src/VueTailwind.js",
    // "./node_modules/vue-tailwind/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, Vazirmatn, sans-serif",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          DEFAULT: "#00a2e8",
          light: "#5bceff",
          lightest: "#E9F1F5",
        },
        gray: {
          darkest: "#111111",
          dark: "#707070",
          DEFAULT: "#c3c3c3",
          light: "#dbdbdb",
          lighter: "#f5f5f5",
          lightest: "#f9f9f9",
        },
        white: "#ffffff",
        teal: { DEFAULT: "#06928f", light: "#0ab0a6" },
        orange: { DEFAULT: "#ffc90e", light: "#ffd956", lightest: "#f9f4df" },
        red: {
          DEFAULT: "#ff4757",
          light: "#ffaaaa",
          lighter: "#ffcaca",
          lightest: "#F6E3E5",
        },
        green: "#30cb70",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
