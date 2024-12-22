/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#284b63",
        secondary: "#74BCC0",
        blue: "#106b9f",
        "blue-v2": "#17b8bb",
        white: "#ffffff",
        moonstone: "#1DC0D3",
        jet: "#353535",
      },
      fontFamily: {
        laila: ['Laila', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
        sourceSans3: ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
