/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      purple: {
        500: '#6B6470',
        900: '#4A314D',
      },
      green: {
        500: '#ACE894',
        900: '#A8BA9A',
      },
      white: '#FFF',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      s2: '0.6rem',
      '2xl': '1.875rem',
      '3xl': '2.5rem',
    },
  },
  plugins: [],
};
