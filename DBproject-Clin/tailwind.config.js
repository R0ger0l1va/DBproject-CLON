/** @type {import('tailwindcss').Config} */

const primeUi = import("tailwindcss-primeui")

export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [primeUi],
}

