/** @type {import('tailwindscss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        purple: '#4A46FF',
        'light-grey': '#F8F8F8',
        yellow: '#F3B755',
        'light-yellow': '#FDBC3E',
        'grey-100': '#EEEEEE',
        'perwinkle-purple': '#F5F5FF',
        'light-purple': '#D7D6FF',
        'yellow-100': '#FFF4EA',
        'purple-50': '#F5F4FF',
        'purple-500': '#EDEBFF',
      },
      borderColor: {
        purple: '#4A46FF',
        'light-grey': '#DEDEDE',
        grey: '#D7D6FF',
      },
      textColor: {
        purple: '#4A46FF',
        red: '#FF1717',
        grey: '#AAAAAA',
        'grey-500': '#2F2F2F',
        'grey-200': '#5B5A87',
        blue: '#05007A',
        'light-purple': '#5B5A87',
        'purple-300': '#02007A',
        'purple-blue': '#42416D',
        'grey-900': '#1A1D1F',
      },
    },
  },
  plugins: [],
}
