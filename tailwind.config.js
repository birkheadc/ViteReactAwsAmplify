/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import animatecss from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: {
        full: "rgba(0,0,0,0)",
      },
      primary: {
        50: "#f9e8f9",
        100: "#f3d1f3",
        200: "#e7a2e8",
        300: "#db74dc",
        400: "#cf45d1",
        500: "#c317c5",
        600: "#9c129e",
        700: "#750e76",
        800: "#4e094f",
        900: "#270527",
      },
      secondary: {
        50: "#f1f9e8",
        100: "#e2f3d1",
        200: "#c6e8a2",
        300: "#a9dc74",
        400: "#8dd145",
        500: "#70c517",
        600: "#5a9e12",
        700: "#43760e",
        800: "#2d4f09",
        900: "#162705",
      },
      neutral: {
        50: "#f1eff1",
        100: "#e3dee3",
        200: "#c7bdc8",
        300: "#ac9dac",
        400: "#907c91",
        500: "#745b75",
        600: "#5d495e",
        700: "#463746",
        800: "#2e242f",
        900: "#171217",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        nav: "3rem",
        "svh-nav": "calc(100svh - 3rem)",
      },
      minHeight: {
        "svh-nav": "calc(100svh - 3rem)",
        "lvh-nav": "calc(100lvh - 3rem)",
      },
      boxShadow: {
        "3xl": "1px 1px 5px black",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("hocus-within", ["&:hover", "&:focus-within"]);
      addVariant("ff", ":-moz-any(&)");
    }),
    animatecss,
  ],
};
