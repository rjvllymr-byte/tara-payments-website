import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#092750',
          800: '#0d3568',
          950: '#060f1e',
        },
        teal: {
          DEFAULT: '#05b8b6',
          dark: '#049e9c',
          light: '#e0fafa',
        },
        brand: {
          blue: '#025eb2',
          accent: '#0451ad',
        },
      },
    },
  },
  plugins: [],
}

export default config
