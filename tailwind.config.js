/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',
        gold: '#FFD700',
        ivory: '#FFFFF0',
        // Centralized brand palette for consistency across the site
        brand: {
          maroon: '#800000',
          gold: '#FFD700',
          ivory: '#FFFFF0',
          orange: '#FFA500',
          cream: '#FFF8DC',
        },
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}