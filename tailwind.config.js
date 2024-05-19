/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'consolas': ['Consolas', 'monaco', 'monospace', 'Courier New', 'Courier'],
      },
    },
  },
  plugins: [],
}

