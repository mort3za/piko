module.exports = {
  jit: true,
  content: [
    "./public/**/*.html",
    "./src/**/*.html",
    "./src/**/*.vue",
    // "./src/VueTailwind.js",
    // "./node_modules/vue-tailwind/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
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
