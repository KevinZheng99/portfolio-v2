/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xxxs: ".5rem",
      xxs: ".625rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
      crosshair: "crosshair",
      "zoom-in": "zoom-in",
      junimo: "url(./assets/Junimo.png), default",
    },
    transitionDelay: {
      50: "50ms",
      75: "75ms",
      100: "100ms",
      125: "125ms",
      150: "150ms",
      175: "175ms",
      200: "200ms",
      225: "225ms",
      250: "250ms",
      275: "275ms",
      300: "300ms",
      325: "325ms",
      350: "350ms",
    },
    extend: {},
  },
  plugins: [],
};
