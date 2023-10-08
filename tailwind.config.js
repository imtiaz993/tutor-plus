/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'c',
      yellow: '#FFA300',
      black: '#000000',
      white: '#FFFFFF',
      grey: '#787878',
      red: '#FF0000',
      pastelgreen: '#B5EBB7',
      pastelpink: '#FFBFBF',
      pastelblue: '#497FFB',
      pastelyellow: '#FFFCBF',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [],
}
