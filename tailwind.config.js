/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        okra: [
          'Okra-Regular',
          'Okra-Bold',
          'Okra-Light',
          'Okra-Medium',
          'sans-serif',
        ],
        roboto: [
          'Roboto-Regular',
          'Roboto-Bold',
          'Roboto-Light',
          'Roboto-Medium',
          'sans-serif',
        ],
        inter: [
          'Inter-Regular',
          'Inter-Bold',
          'Inter-Light',
          'Inter-Medium',
          'sans-serif',
        ],
        poppins: [
          'Poppins-Regular',
          'Poppins-Bold',
          'Poppins-Light',
          'Poppins-Medium',
          'sans-serif',
        ],
      },
      colors: {
        primary: '#FC5431',
        secondary: '#FDBB8A',
        tertiary: '#CF3239',
      },
    },
  },
  plugins: [],
};
