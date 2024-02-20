/** @type {import('tailwindcss').Config} */

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  safelist: [
    ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
    ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
    ...labelsClasses.map((lbl) => `text-${lbl}-400`),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [import("@tailwindcss/forms")],
};
