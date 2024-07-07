/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    './client/public/index.html', 
    './client/src/**/*.{vue,js,ts,jsx,tsx}',
           ],
  theme: {
    extend: {},
  },
  plugins: [],
}

