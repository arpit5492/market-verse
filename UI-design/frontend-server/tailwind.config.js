/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'new-green': {
          50: '#a3d2b0',
          100: '#74c8a9',
          150: '#29a337'
        }
      }
    }
  },
  plugins: [],
}

