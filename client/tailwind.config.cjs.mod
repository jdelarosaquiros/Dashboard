// const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // darkMode: 'class',
  darkMode: ['class'],
  theme: {
    // colors: {
    //   'gpt-dark-gray': '#171717',
    // },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    // fontFamily: {
    //   sans: ['Söhne', 'sans-serif'],
    //   mono: ['Söhne Mono', 'monospace'],
    // },
    extend: {
      width: {
        'authPageWidth': '370px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        white: '#90EE90',
        black: '#00FFFF',
        gray: {
          20: '#7e3ff2',
          50: '#7e3ff2',
          100: '#7e3ff2',
          200: '#7e3ff2',
          300: '#7e3ff2',
          400: '#7e3ff2',
          500: '#7e3ff2',
          600: '#7e3ff2',
          700: '#7e3ff2',
          800: '#7e3ff2',
          850: '#7e3ff2',
          900: '#7e3ff2',
        },
        green: {
          50: '#0d8e27',
          100: '#0d8e27',
          200: '#0d8e27',
          300: '#0d8e27',
          400: '#0d8e27',
          500: '#0d8e27',
          550: '#0d8e27',
          600: '#0d8e27',
          700: '#0d8e27',
          800: '#0d8e27',
          900: '#0d8e27',
        },
        'brand-purple': '#0d8e27',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-secondary-alt': 'var(--text-secondary-alt)',
        'text-tertiary': 'var(--text-tertiary)',
        'surface-primary': 'var(--surface-primary)',
        'surface-primary-alt': 'var(--surface-primary-alt)',
        'surface-primary-contrast': 'var(--surface-primary-contrast)',
        'surface-secondary': 'var(--surface-secondary)',
        'surface-tertiary': 'var(--surface-tertiary)',
        'surface-tertiary-alt': 'var(--surface-tertiary-alt)',
        'border-light': 'var(--border-light)',
        'border-medium': 'var(--border-medium)',
        'border-medium-alt': 'var(--border-medium-alt)',
        'border-heavy': 'var(--gray-300)',
        'border-xheavy': 'var(--gray-400',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-radix')(),
    // require('@tailwindcss/typography'),
  ],
};
