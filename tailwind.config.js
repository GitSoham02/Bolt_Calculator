/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      colors: {
        primary: '#2563eb',
        'background-light': '#f8fafc',
        'background-dark': '#0f172a',
        'surface-light': '#ffffff',
        'surface-dark': '#1e293b',
        'border-light': '#e2e8f0',
        'border-dark': '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'draw-line': 'draw-line 2s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'stagger-1': 'fade-in-up 0.8s ease-out 0.1s forwards',
        'stagger-2': 'fade-in-up 0.8s ease-out 0.2s forwards',
        'stagger-3': 'fade-in-up 0.8s ease-out 0.3s forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 99, 235, 0)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(37, 99, 235, 0.3)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
