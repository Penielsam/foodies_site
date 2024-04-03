/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontfamily: {
        cursive : ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};

