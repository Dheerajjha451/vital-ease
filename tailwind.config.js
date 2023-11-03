/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        'LG':'#DEF7FF',
        'DG':'#2AB7B5',
        'DDG':"#024F4F",
        'DB':'#065AD7'
      },
      divideColor:{
        'LG':'#DEF7FF',
        'DG':'#2AB7B5',
        'DDG':"#024F4F",
        'DB':'#065AD7'
      },
      colors:{
        'LG':'#DEF7FF',
        'DB':'#065AD7',
        'DG':'#2AB7B5',
        'DDG':"#024F4F",
      },
      backgroundImage: {
        'pattern': "url('../public/assests/pattern.webp')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
