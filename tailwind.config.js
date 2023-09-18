module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        transparent: 'transparent',
        black: 'var(--black)',
        white: 'var(--white)',
        red: {
          DEFAULT: 'var(--red-default)',
          'shade-10': 'var(--red-shade-10)',
          'shade-20': 'var(--red-shade-20)',
          'shade-30': 'var(--red-shade-30)',
          'shade-40': 'var(--red-shade-40)',
          'shade-50': 'var(--red-shade-50)',
          'shade-60': 'var(--red-shade-60)',
          'tint-10': 'var(--red-tint-10)',
          'tint-20': 'var(--red-tint-20)',
          'tint-30': 'var(--red-tint-30)',
          'tint-40': 'var(--red-tint-40)',
          'tint-50': 'var(--red-tint-50)',
          'tint-60': 'var(--red-tint-60)',
        },
        gray: {
          DEFAULT: 'var(--gray-default)',
          'shade-10': 'var(--gray-shade-10)',
          'shade-20': 'var(--gray-shade-20)',
          'shade-30': 'var(--gray-shade-30)',
          'shade-40': 'var(--gray-shade-40)',
          'shade-50': 'var(--gray-shade-50)',
          'shade-60': 'var(--gray-shade-60)',
          'shade-70': 'var(--gray-shade-70)',
          'shade-80': 'var(--gray-shade-80)',
          'shade-90': 'var(--gray-shade-90)',
          'tint-10': 'var(--gray-tint-10)',
          'tint-20': 'var(--gray-tint-20)',
          'tint-30': 'var(--gray-tint-30)',
          'tint-40': 'var(--gray-tint-40)',
          'tint-50': 'var(--gray-tint-50)',
          'tint-60': 'var(--gray-tint-60)',
        },
      },
      fontFamily: {
        main: ['Helvetica', 'Arial', 'sans-serif'],
        headline: ['Cuprum-Regular', 'Helvetica', 'Arial', 'sans-serif'],
        logo: ['Another-danger', 'Helvetica', 'Arial', 'sans-serif'],
      },
      container: {
        // default breakpoints but with 2xl removed
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
};
