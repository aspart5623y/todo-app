/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
              "./src/**/*.{html,js,jsx,ts,tsx}", 
              "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
            ],
  theme: {
    extend: {
      colors: {
        'golden': '#fcc281',
        'golden-dark': '#d5a56e',
        'dark': '#080a0b',
        'dark-light': '#1a1c1e',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
