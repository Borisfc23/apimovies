/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
