/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '32px',
      },
      maxWidth: '1200px',
    },
    extend: {
      colors: {
        ink: '#1B2A41',
        'teal-700': '#0B5563',
        'teal-50': '#E6F3F5',
        marigold: {
          100: '#FFF0D2',
          400: '#F5A623',
          600: '#D98A0B',
        },
        coral: {
          500: '#E4694E',
        },
        leaf: {
          500: '#3F9B6E',
        },
        cream: '#FFF8EC',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(2.5rem, 4.5vw, 4.5rem)', { lineHeight: '1.05' }],
        'h2': ['clamp(2rem, 3vw, 3rem)', { lineHeight: '1.1' }],
        'h3': ['clamp(1.25rem, 1.5vw, 1.5rem)', { lineHeight: '1.3' }],
        'body': ['clamp(1rem, 1.125vw, 1.125rem)', { lineHeight: '1.65' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.12em', textTransform: 'uppercase' }],
      },
      borderRadius: {
        'card': '24px',
        'pill': '9999px',
        'arch': '32px 32px 0 0',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(27, 42, 65, 0.06), 0 8px 24px rgba(27, 42, 65, 0.08)',
        'lift': '0 16px 40px rgba(27, 42, 65, 0.14)',
      },
      spacing: {
        '0': '0',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
    },
  },
  plugins: [],
};
