/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'dark-gray': '#202228',
      'medium-gray': '#2C2D33',
      'light-gray': '#9FA7C1',
      'orange': '#FF7F00',
      'orange-light': '#FFA246',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['"Poppins"', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
