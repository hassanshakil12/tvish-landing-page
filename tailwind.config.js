module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2E3192",
        "secondary-blue": "#165E96",
      },
      screens: {
        xs: "475px", // or whatever breakpoint you prefer
      },
    },
  },
  plugins: [],
};
