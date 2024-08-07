/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'placeholder': 'white',
      },
      placeholderColor: {
        'custom': 'white',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const placeholderColors = theme('placeholderColor');
      const newUtilities = Object.entries(placeholderColors).map(([key, value]) => {
        return {
          [`.${e(`placeholder-${key}`)}::placeholder`]: {
            color: value,
          },
        };
      });
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}