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
        'grey-50': ' #EFEFEF',
        blue: '#05007A',
        'grey-10': '#FCFCFC',
        'dark-grey': '#1C1B1F',
        pink: '#FC0A70',
        'grey-150': '#EEEEEE',
        'light-green': '#E0F6F4',
        'grey-300': '#EDEDED',
        'light-opacity': '#5b5a873f',
        light: '#F9F9FF',
        green: '#10B981',
        'grey-200': '#5B5A87',
      },
      borderColor: {
        purple: '#4A46FF',
        'light-grey-100': '#F2F2F2',
        'light-grey': '#DEDEDE',
        grey: '#D7D6FF',
        pink: '#FC0A70',
        'grey-100': '#5B5A87',
        'light-blue': '#E0DFFE',
        'grey-50': '#EFEFEF',
        'grey-200': '#DFDEDE',
        'grey-300': '#E2E2E2',
        'grey-400': '#E0E0E0',
        'grey-500': '#DCDCDC',
        'perwinkle-purple': '#F5F5FF',
        'grey-150': '#E9E9E9',
      },
      textColor: {
        'purple-pink': '#5954D4',
        purple: '#4A46FF',
        red: '#FF1717',
        grey: '#AAAAAA',
        'grey-500': '#2F2F2F',
        'grey-300': '#6F767E',
        blue: '#05007A',
        'light-purple': '#5B5A87',
        'purple-300': '#02007A',
        'purple-blue': '#42416D',
        'grey-900': '#1A1D1F',
        'dark-grey': '#1C1B1F',
        pink: '#FC0A70',
        'light-grey': '#6F767E',
        'purple-100': '#9A99CA',
        'purple-50': '#BDBDCF',
        'green-900': '#374151',
        green: ' #00FF00',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
