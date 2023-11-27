/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'today': '#BBDEFB',
        'open': '#D72E85',
        'closed': '#72B42D'
      }
    },
  },
  plugins: [],
}

