/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#F7C7CB',
        'light-blue': '#B3C3D3',
        'white': '#FFFFFF',
        'muted-peach': '#FFC1A1',
        'pale-purple': '#D6B8D6',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      screens: {
        'sm': '640px', // Small screen, like a phone
        'md': '768px', // Medium screen, like a tablet
        'lg': '1024px', // Large screen, like a desktop
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}