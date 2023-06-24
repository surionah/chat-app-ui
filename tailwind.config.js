/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#25BBC7",
      secondary: "#C73A8F",
      tertiary: "#C7AE12",
      white: "#EDF2F4",
      black: "#2B2D42",
    },
  },
  plugins: [],
};
