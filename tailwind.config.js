/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        linen: '#F7F1E8',
        ivory: '#FFFCF6',
        clay: '#C98F77',
        moss: '#8A9478',
        ink: '#2E2A27',
        muted: '#766F68'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(46, 42, 39, 0.09)'
      }
    }
  },
  plugins: []
};
