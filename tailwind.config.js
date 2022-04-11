module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1440px',
      xl: '1530px',
    },
    fontFamily: {
      display: ['Fraunces', 'serif'],
      body: ['Barlow', 'sans-serif'],
    },
    fontSize: {
      sm: '0.75rem',
      xl: '1.125rem',
      '2xl': '1.5rem',
      '2mxl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '4mxl': '3rem',
      '5xl': '4.5rem',
      '6xl': '6rem',
      '10xl': '9.375rem',
    },
    colors: {
      green: {
        650: '#0e8784',
      },
      gray: {
        light: '#fefcf7',
        smooth: '#f4f1eb',
        dark: '#333d4b',
        DEFAULT: '#83888F',
      },
      orange: {
        pale: '#fdd6ba',
      },
      blue: {
        dark: '#2c343e',
      },
      transparent: 'transparent',
    },

    extend: {
      backgroundImage: {
        'quality-mobile': "url('./images/about/mobile/bg-quality.png')",
        'quality-tablet': "url('./images/about/tablet/bg-quality.png')",
        'quality-desktop': "url('./images/about/desktop/bg-quality.png')",
      },
      width: {
        50: '12.5rem',
        94: '22rem',
        120: '120%',
        '9/10': '90%',
        desktop: '1280px',
      },
      maxHeight: {
        100: '40rem',
      },
      zIndex: {
        '-10': '-10',
      },
      lineHeight: {
        16: '4.5rem',
      },
      translate: {
        '7.50': '1.875rem',
      },
      transitionProperty: {
        height: 'height',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
