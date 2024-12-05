/** @type {import('tailwindcss').Config} */
const pr = import("tailwindcss-primeui")
export default {

  content:  ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [pr],
}

