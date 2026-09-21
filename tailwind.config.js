/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./standalone.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./karsa_futsal_profile.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#0D2B4A',
        'brand-lime': '#98C93C',
        'brand-navy': '#07192F',
        'brand-bg': '#F0F4F8',
      }
    },
  },
  plugins: [],
}
