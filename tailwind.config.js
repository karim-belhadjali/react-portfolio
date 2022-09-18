/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      "2xl": { max: "1536px" },
      "1xl": { max: "1440px" },
      "0xl": { max: "1180px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      "1md": { max: "980px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "550px" },
    },
    extend: {
      gridTemplateColumns: {
        card: "50% 35%",
        cards: "repeat(3,1fr)",
      },
      backgroundImage: {
        blob: "url('./assets/svg/bg-svg.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        bg: "#1f1f38",
        bgvariant: "#2c2c6c",
        primary: "#4db5ff",
        primaryvariant: "rgba(77, 181, 255, 0.4)",
        light: "rgba(255, 255, 255, 0.6)",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
