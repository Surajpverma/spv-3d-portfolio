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
        dark: "#333333",
        light: "#E4E1DC",
        primary: "#F09BA7",
        primaryDark: "#6C9882",
      },
    },
  },
  plugins: [],
}
