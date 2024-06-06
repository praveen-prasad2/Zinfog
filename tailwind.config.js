/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "zinfog-primary":"#1f6acb",
        "zinfog-bgblue":"#e4fbfb",
        "zinfog-darkblue":"#2b5388",
        "zinfog-black":"",
      }
    },
  },
  plugins: [],
};
