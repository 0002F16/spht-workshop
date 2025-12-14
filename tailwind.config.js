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
          50: '#eff6ff',
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
          DEFAULT: '#1e3a8a', // Deep blue
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Mobile base sizes (scaled up for larger screens)
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],     // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],    // 36px
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],       // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],    // 60px
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],       // 72px
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em' }],         // 96px
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }],         // 128px
      },
      fontWeight: {
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'primary': '0 4px 14px 0 rgb(30 58 138 / 0.15)',
        'primary-lg': '0 10px 25px 0 rgb(30 58 138 / 0.2)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

