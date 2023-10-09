/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'an-purple-lighter': '#a287fd',
        'an-purple': '#7d57fc',
        'an-purple-darker': '#6537fb',
        'an-green-lighter': '#dafd86',
        'an-green': '#cbfc56',
        'an-green-darker': '#bafc22',
        'an-gray': '#e9e9e9',
        'an-lightgray': '#f8f8f8',
      },
    },
  },
  plugins: [],
};
