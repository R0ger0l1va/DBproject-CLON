/** @type {import('tailwindcss').Config} */

const primeUi = import('tailwindcss-primeui')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Italiana',
        secondary: 'Dm Serif Text',
        misc: 'Aboreto',
      },
      colors: {
        primary: {
          DEFAULT: '',
          hover: '',
        },
        secondary: {},
        accent: {
          DEFAULT: '',
          secondary: '',
          hover: '',
        },
      },
      backgroundImage: {
        hero1: "url('/Bg-Image/heroWindows1.jpg')",
        hero2: "url('/Bg-Image/heroWindows2.jpg')",
        hero3: "url('/Bg-Image/heroWindows3.jpg')",
      },
      animation: {
        fadein: 'fadein 2s ease-in-out',
        fadeout: 'fadeout 2s ease-in-out',
        fadeinleft: 'fadeinleft 1s ease-in-out',
        fadeoutleft: 'fadeoutleft 1s ease-in-out',
        fadeinright: 'fadeinright 1s ease-in-out',
        fadeoutright: 'fadeoutright 1s ease-in-out',
        zoomin: 'zoomin 1s ease-in-out',
        flipleft: 'flipleft 1s ease-in-out',
        flipup: 'flipup 1s ease-in-out',
        scalein: 'scalein 2s ease-in-out',
        fadeinup: 'fadeinup 1s ease-in-out',
        fadeindown: 'fadeindown 2s ease-in-out'
      },
      keyframes: {
        fadein: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeout: { '0%': { opacity: 1 }, '100%': { opacity: 0 } },
        fadeinleft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeoutleft: {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(-20px)' },
        },
        fadeinright: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeoutright: {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(20px)' },
        },
        zoomin: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        flipleft: {
          '0%': { opacity: 0, transform: 'rotateY(-180deg)' },
          '100%': { opacity: 1, transform: 'rotateY(0)' },
        },
        flipup: {
          '0%': { opacity: 0, transform: 'rotateX(-180deg)' },
          '100%': { opacity: 1, transform: 'rotateX(0)' },
        },
        scalein: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        fadeinup: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeindown: {
          '0%': { opacity: 0, transform: 'translateY(-100px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [primeUi],
}
