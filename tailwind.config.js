/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          900: '#111114',
          800: '#18181b',
        },
        red: {
          DEFAULT: '#FF2D55',
          500: '#FF2D55',
          600: '#e60026',
        },
        accent: {
          blue: '#3A8EF6',
          cyan: '#00fff7',
          white: '#fff',
        },
        gray: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          700: '#374151',
          800: '#1f2937',
        },
      },
      boxShadow: {
        'glow-red': '0 0 2px 1px rgba(255,45,85,0.25), 0 0 4px 2px rgba(230,0,38,0.15)',
        'glow-cyan': '0 0 8px 1px #00fff7, 0 0 16px 4px #3A8EF6',
        'glass': '0 4px 16px 0 rgba(31, 38, 135, 0.25)',
      },
      backgroundImage: {
        'mirror-gradient': 'linear-gradient(135deg, rgba(255,45,85,0.08) 0%, rgba(58,142,246,0.05) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
} 