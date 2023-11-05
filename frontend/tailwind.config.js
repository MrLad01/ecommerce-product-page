/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.tsx",
    "./src/components/Nav.tsx"
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '325px'
      }
    },
  },
  plugins: [],
}

