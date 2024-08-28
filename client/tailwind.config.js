/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        gupter: ["Gupter", "serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      clipPath: {
        "custom-slant": "polygon(0 0, 100% 0, 100% 100%, 0 50%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    function ({ addUtilities }) {
      addUtilities({
        ".clip-path-custom-slant": {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
        },
      });
    },
    
  ],
};