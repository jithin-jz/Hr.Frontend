/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#EBCB65',
        'brand-dark': '#1A1A1A',
        'brand-bg': '#F4F6F8',
        'brand-gray': '#666666',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
      },
    },
  },
  plugins: [],
}
