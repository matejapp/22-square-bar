/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand
        navy: '#092e4a',
        'navy-deep': '#071e30',
        orange: '#ffa500',
        'orange-soft': '#f0963d',
        // Editorial warm tones (new)
        cream: '#faf6ef',
        'cream-deep': '#f3ecdf',
        terracotta: '#c95f3e',
        'terracotta-soft': '#e07b5b',
        ink: '#1d1916',
        mist: '#f0f4f8',
        haze: '#e8edf2',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(9, 46, 74, 0.08)',
        lift: '0 6px 24px rgba(9, 46, 74, 0.14)',
        // Brutalist accent shadow
        stamp: '6px 6px 0 0 rgba(9, 46, 74, 1)',
      },
      borderRadius: { card: '12px' },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
