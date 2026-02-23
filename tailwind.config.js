/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        'bull-run': 'run 20s linear infinite',
        'pulse-energy': 'pulse-energy 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'tilt': 'tilt 10s infinite linear',
        'glow': 'glow 3s ease-in-out infinite',
        'speed-line': 'speedLine 1s linear infinite',
        'revolution': 'revolution 20s linear infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
        'bounce-energy': 'bounceEnergy 2s infinite',
      },
      keyframes: {
        'run': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'pulse-energy': {
          '0%, 100%': { 
            opacity: 1,
            transform: 'scale(1)',
            filter: 'brightness(1)'
          },
          '50%': { 
            opacity: 0.8,
            transform: 'scale(1.1)',
            filter: 'brightness(1.5)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'tilt': {
          '0%, 100%': { transform: 'rotate(-1deg) scale(1)' },
          '50%': { transform: 'rotate(1deg) scale(1.02)' },
        },
        'glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(219, 10, 64, 0.3)',
            borderColor: '#DB0A40'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(219, 10, 64, 0.6), 0 0 60px rgba(255, 230, 0, 0.3)',
            borderColor: '#FFE600'
          },
        },
        'speedLine': {
          '0%': { 
            transform: 'translateX(-100%) skewX(-30deg)',
            opacity: '0'
          },
          '50%': { 
            opacity: '0.5'
          },
          '100%': { 
            transform: 'translateX(400%) skewX(-30deg)',
            opacity: '0'
          },
        },
        'revolution': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        'bounceEnergy': {
          '0%, 100%': { 
            transform: 'translateY(0) scale(1)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(-25px) scale(1.1)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
      },
      backgroundImage: {
        'bull-gradient': 'linear-gradient(135deg, #DB0A40 0%, #FF1A4F 50%, #FFE600 100%)',
        'bull-energy': 'radial-gradient(circle at center, #FFE600 0%, #DB0A40 100%)',
      },
    },
  },
  plugins: [],
}
