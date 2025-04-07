/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2D3142", // dark blue-grey
        secondary: "#93A8AC", // sage grey
        accent: "#EAE8FF", // soft lavender
        neutral: {
          50: "#F7F7F9",
          100: "#E8E8ED",
          200: "#D1D1DB",
          300: "#B9B9C9",
          400: "#9D9DB7",
          500: "#7E7E9A",
          600: "#64647B",
          700: "#4A4A5C",
          800: "#31313D",
          900: "#18181E",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#31313D',
            h1: {
              fontWeight: '500',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: '500',
              letterSpacing: '-0.025em',
            },
          },
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'md': '0.5rem',
        'lg': '1rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
