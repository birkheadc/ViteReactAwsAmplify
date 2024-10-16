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
        50: "#f9f1f9",
        100: "#f2e3f2",
        200: "#e5c7e5",
        300: "#d9abd8",
        400: "#cc8fcb",
        500: "#bf73be",
        600: "#995c98",
        700: "#734572",
        800: "#4c2e4c",
        900: "#261726",
      },
      secondary: {
        50: "#f1f5f9",
        100: "#e3eaf2",
        200: "#c7d6e5",
        300: "#abc1d9",
        400: "#8fadcc",
        500: "#7398bf",
        600: "#5c7a99",
        700: "#455b73",
        800: "#2e3d4c",
        900: "#171e26",
      },
      neutral: {
        50: "#f9f5f1",
        100: "#f2ebe3",
        200: "#e5d7c7",
        300: "#d9c2ab",
        400: "#ccae8f",
        500: "#bf9a73",
        600: "#997b5c",
        700: "#735c45",
        800: "#4c3e2e",
        900: "#261f17",
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
