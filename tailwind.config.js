/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      const safeAreaComponents = {
        '.header-safe-area': {
          paddingTop: 'env(safe-area-inset-top)',
          // Add other header styles as needed
        },
        '.footer-safe-area': {
          paddingBottom: 'env(safe-area-inset-bottom)',
          // Add other footer styles as needed
        },
      };
      addComponents(safeAreaComponents);
    },
  ],
  variants: {
    extend: {
      padding: ['responsive'],
    },
  },
};
