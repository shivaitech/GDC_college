/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        saffron: {
          50:  '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc071',
          400: '#ff9a38',
          500: '#ff7c12',
          600: '#f06007',
          700: '#c74608',
          800: '#9e380f',
          900: '#7f3010',
          950: '#451505',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
      animation: {
        'fade-in-up':    'fadeInUp 0.6s ease-out',
        'fade-in-left':  'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'bounce-slow':   'bounce 2s infinite',
        'ticker':        'ticker 30s linear infinite',
        'hero-zoom':     'heroZoom 8s ease-in-out infinite alternate',
        'float':         'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        heroZoom: {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'mountain-gradient': 'linear-gradient(135deg, #172554 0%, #1e3a8a 40%, #1d4ed8 80%, #3b82f6 100%)',
        'hero-gradient':     'linear-gradient(to bottom, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0.38) 50%, rgba(15,23,42,0.82) 100%)',
      },
      boxShadow: {
        'card':    '0 4px 20px rgba(0,0,0,0.08)',
        'card-lg': '0 8px 40px rgba(0,0,0,0.12)',
        'green':   '0 4px 20px rgba(37,99,235,0.28)',
      },
    },
  },
  plugins: [],
}
