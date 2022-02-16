module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      colors: {
        "grey-light": "#C0C7D6",
        "grey-dark": "#7c878e",
        red: "#CB8581",
        green: "#8FCB81",
        yellow: "#E1D888",
      },
      boxShadow: {
        std: "0 15px 34px 0 rgb(175 181 204 / 32%)",
        clay: "0 35px 68px 0 rgba(192,199,214,0.42), inset 0 -8px 16px 0 #C0C7D6",
      },
      maxWidth: {
        container: "73.75rem",
        card: "12rem",
      },
    },
  },
  plugins: [],
};
