module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // colors: {
    //   black: '#000',
    //   white: '#FFF',
    //   lightText: '#ffffff',
    //   darkOrange: '#ff7f0f',
    //   lightOrange: '#ffab00',
    //   lightBlue: '#82c3d6',
    //   darkBlue: '#3a7ca4',
    //   blackBg:"#1c1c1c",
    //   slateGray:"#5d8a96",
    //   darkSlateGray:"#454d58",
    //   mediumSlateGray:"#59687a",
    //   lightSlateGray:"#c4c4c4",

    // },
    extend: {},
    fontFamily: {
      Oswald: ["'Oswald'", 'sans-serif'],
      Montserrat: ["'Montserrat'", 'sans-serif'],
      Spartan: ["'Spartan'", 'sans-serif'],
      Island: ["'Island Moments'", 'sans-serif'],
      CinzelDeco: ["'Cinzel Decorative'", 'sans-serif'],
      Abel: ["'Abel'", 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
