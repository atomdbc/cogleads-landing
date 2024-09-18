/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        foreground: {
          light: '#000000',
          dark: '#FFFFFF',
        },
        primary: {
          light: '#000000',
          dark: '#FFFFFF',
        },
        secondary: {
          light: '#FFFFFF',
          dark: '#000000',
        },
      },
    },
  },
  plugins: [],
};