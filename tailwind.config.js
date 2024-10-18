/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  extend: {},
  fontFamily: {
   montserrat: ['Montserrat', 'sans-serif'],
  },
  fontSize: {
   11: 'var(--sz-11)',
   12: 'var(--sz-12)',
   13: 'var(--sz-13)',
   14: 'var(--sz-14)',
   15: 'var(--sz-15)',
   16: 'var(--sz-16)',
   18: 'var(--sz-18)',
   20: 'var(--sz-20)',
   21: 'var(--sz-21)',
   23: 'var(--sz-23)',
   24: 'var(--sz-24)',
   30: 'var(--sz-30)',
   36: 'var(--sz-36)',
   48: 'var(--sz-48)',
  },
  colors: {
   trp: 'transparent',
  },
  fontWeight: {
   300: '300',
   400: '400',
   500: '500',
   600: '600',
   700: '700',
   800: '800',
   900: '900',
  },
  lineHeight: {
   n: 'normal',
  },
 },
 plugins: [],
};
