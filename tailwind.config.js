/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  plugins: [require("flowbite/plugin")],
};

module.exports = {
  content: [
    // ...
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
};
