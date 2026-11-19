/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#04122B',
          900: '#071E46', // Primary Navy
          800: '#102F60', // Secondary Navy
          700: '#183E7D',
          600: '#23509C',
          100: '#E7EEF8',
          50: '#F5F7FB',  // Light Background Canvas
        },
        gold: {
          600: '#B58618',
          500: '#D6A52B', // Academic Gold
          400: '#E4B94C',
          100: '#FBF2D9',
          50: '#FDFBF4',
        },
        slate: {
          900: '#17243A', // Primary Text
        },
        crimson: {
          600: '#C83232', // Accent Red
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'concentric-outer': '24px',
        'concentric-inner': '8px',
      },
      boxShadow: {
        'subtle': '0 2px 8px -1px rgba(7, 30, 70, 0.06), 0 1px 3px -1px rgba(7, 30, 70, 0.04)',
        'premium': '0 10px 30px -4px rgba(7, 30, 70, 0.08), 0 4px 10px -2px rgba(7, 30, 70, 0.04)',
        'elevated': '0 20px 40px -8px rgba(7, 30, 70, 0.12), 0 8px 16px -4px rgba(7, 30, 70, 0.06)',
      }
    },
  },
  plugins: [],
}
