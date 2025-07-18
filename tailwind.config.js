/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flame: {
          50: '#fff1f0',
          100: '#ffdddb',
          200: '#ffc2bf',
          300: '#ff9992',
          400: '#ff6b61',
          500: '#ff3b30', // Apple red
          600: '#ff2d55', // Apple pink
          700: '#e81e30',
          800: '#c1121f',
          900: '#a01122',
        },
        dark: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0a0a0a',
          950: '#000000',
        }
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(255, 59, 48, 0.5)',
            backgroundColor: 'rgba(255, 59, 48, 0.8)' 
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(255, 59, 48, 0.8)', 
            backgroundColor: 'rgba(255, 45, 85, 0.9)' 
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dark-gradient': 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
        'flame-gradient': 'linear-gradient(135deg, #ff3b30 0%, #ff2d55 100%)',
      }
    },
  },
  plugins: [],
}