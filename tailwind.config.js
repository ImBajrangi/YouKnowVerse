/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#EBF5F8',
          100: '#D2EAF0',
          200: '#C4DEE3', // AWSMCOLOR Swatch 3: Soft Powder Ice Blue
          300: '#86B9C7', // AWSMCOLOR Swatch 4: Muted Steel Cyan
          400: '#3A9DB5',
          500: '#0082A6', // AWSMCOLOR Swatch 1: Primary Deep Teal
          600: '#007191',
          700: '#005C76',
          800: '#134455',
          900: '#0B2D3A', // Deep Contrast Peacock Navy
          950: '#061D26', // Abyssal Charcoal Teal
        },
        ocean: {
          950: '#061D26',
          900: '#0B2D3A',
          800: '#134455',
          700: '#1B566E',
          600: '#2772A0', // Image 1: Ocean Blue
          500: '#3585B5',
          400: '#5C9DC3',
          300: '#86B9C7',
          200: '#CCDDEA', // Image 1: Cloudy Sky
          100: '#E4EEF5',
          50: '#F5F9FC',
        },
        linen: {
          50: '#FDFCF9',
          100: '#F7F5ED', // AWSMCOLOR Swatch 2: Warm Linen Off-White Canvas
          200: '#EFECE0',
          300: '#E2DEC8',
        },
        ice: {
          DEFAULT: '#C4DEE3',
          light: '#E8F3F6',
          dark: '#A3CDD6',
        },
        cloudy: {
          DEFAULT: '#CCDDEA',
          light: '#EDF4F9',
          dark: '#B0C8DA',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'concentric-outer': '24px',
        'concentric-inner': '8px',
      },
      boxShadow: {
        'subtle': '0 2px 8px -1px rgba(11, 45, 58, 0.05), 0 1px 3px -1px rgba(11, 45, 58, 0.03)',
        'premium': '0 10px 30px -4px rgba(11, 45, 58, 0.08), 0 4px 10px -2px rgba(11, 45, 58, 0.04)',
        'elevated': '0 20px 40px -8px rgba(11, 45, 58, 0.12), 0 8px 16px -4px rgba(11, 45, 58, 0.06)',
      }
    },
  },
  plugins: [],
}
