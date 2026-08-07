import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#141414',
        brand: '#5A30F0',
        'brand-blue': '#01A5FF',
        'brand-dark': '#017AD4',
        gray: '#5E5E5E',
        'dark-gray': '#3A3A3A',
        'light-bg': '#F3F6FB',
        'light-blue': '#D5E5FF',
        'subtle-gray': '#E3E3E3',
        'footer-line': '#2A2A2A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        'full-99': '99px',
      },
      boxShadow: {
        card: '0 0 8px rgba(184, 184, 184, 0.15)',
        'card-purple': '0 0 8px rgba(203, 189, 255, 0.25)',
        nav: '0 0 16px rgba(184, 184, 184, 0.15)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
