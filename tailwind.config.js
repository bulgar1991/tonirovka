/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0b0b0c',
          850: '#111113',
          800: '#16161a',
          700: '#222228',
          600: '#2e2e36',
          400: '#8a8a96',
          300: '#b4b4be',
        },
        brand: {
          DEFAULT: '#e11d2a',
          400: '#ff4d58',
          500: '#ef2633',
          600: '#e11d2a',
          700: '#b3121e',
          800: '#7f0c15',
        },
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        site: '76rem',
      },
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'slide-in': { from: { transform: 'translateX(100%)' }, to: { transform: 'translateX(0)' } },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          from: { transform: 'translateX(-120%) skewX(-20deg)' },
          to: { transform: 'translateX(220%) skewX(-20deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease',
        'slide-in': 'slide-in 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 1.1s ease',
      },
    },
  },
  plugins: [],
};
