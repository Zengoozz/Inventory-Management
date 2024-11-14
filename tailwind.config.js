/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '1.25rem'],
      base: ['16px', '1.25rem'],
      customBase:['16px', '1.5rem'],
      lg: ['20px', '1.25rem'],
      xl:['24px', '1.25rem'],
      customXl: ['1.25rem', '1.875rem'],
      header: ['36px', '1.25rem'],
    },
    extend: {},
  },
  plugins: [],
}

