/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-bull': '#DB0A40',
        'red-bull-dark': '#B00833',
        'red-bull-light': '#FF1A4F',
        'bull-yellow': '#FFE600',
        'bull-black': '#0A0A0A',
        'bull-silver': '#C0C0C0',
      },
      animation: {
        'pulse-energy': 'pulse-energy 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
        'bounce-energy': 'bounceEnergy 2s infinite',
        'speed-line': 'speedLine 1s linear infinite',
      },
      keyframes: {
        'pulse-energy': {
          '0%, 100%': { 
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: 0.8,
            transform: 'scale(1.1)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(219, 10, 64, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(219, 10, 64, 0.6)',
          },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        'bounceEnergy': {
          '0%, 100%': { 
            transform: 'translateY(0)',
          },
          '50%': { 
            transform: 'translateY(-20px)',
          },
        },
        'speedLine': {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '50%': { 
            opacity: '0.5'
          },
          '100%': { 
            transform: 'translateX(400%)',
            opacity: '0'
          },
        },
      },
    },
  },
  plugins: [],
}
