const colors = require("tailwindcss/colors");
module.exports = {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: colors.pink,
      secondary: colors.fuchsia,
      error: colors.rose,
      success: colors.teal,
      warning: colors.amber,
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  safelist: [
    {
      pattern: /w-*/,
      variants: ["lg", "md", "xs", "sm", "xl"],
    },
  ],
};
