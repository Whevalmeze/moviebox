/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,jsx}",
    ".index.html",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f7fafc',
          400: '#9CA3AF',
          500: '#6B7280',
          900: '#111827',
        },
        transparent: 'transparent',
        current: 'currentColor',
        rose : {
          700: '#BE123C',
        },
        red: {
          600: '#9CA3AF',
        },
        lightGray: '#F3F4F680',
        tags: "hsla(220, 14%, 96%, 0.5)"
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      width : {
        grid : "250px",
      }
    },
  },
  plugins: [],
}

