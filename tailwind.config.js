/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3D59',
        secondary: '#FFC13B',
        muted: '#6B7280'
      },
      borderRadius: {
        button: '8px',
        md: '12px',
        xl: '20px'
      },
      boxShadow: {
        card: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)'
      }
    }
  },
  plugins: []
};
