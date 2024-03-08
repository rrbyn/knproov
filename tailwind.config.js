/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'neutral-0': '#FFFFFF',
        'neutral-6': '#F3F3F3',
        'neutral-85': '#565353',
        'neutral-25': '#DCDBDB',
        'neutral-100': '#393737',
        'red-10': '#FDEAEB',
        'red-25': '#FAC9CD',
        'red-40': '#F8A9B0',
        'red-110': '#D52533',
        'red-120': '#BE212E',
        'red-130': '#A61D28',
        'background-blur': '#192F52'
      },
      boxShadow: {
        'delete-focused': '0px 0px 0px 4px #FAC9CD',
        'cancel-focused': '0px 0px 0px 4px #F2F4F7'
      },
      fontFamily: {
        'Open-Sans': ['Open-Sans'], 
      },
    }
  },
  plugins: [],
}

