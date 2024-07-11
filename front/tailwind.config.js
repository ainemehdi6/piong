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
      'bg-gray': '#E3E4E7',
      'xlight-gray': '#D9DBE0',
      'transparent': 'gba(255, 255, 255, 0)',
      'gray-200': '#D7D7D7',
    },
    fontFamily: {
      sans: ['"Poppins"', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
