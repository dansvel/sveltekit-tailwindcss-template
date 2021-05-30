module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': [ '"Fira Sans"' ],
      // 'serif': ['ui-serif', 'Georgia', ],
      'mono': [ '"Fira Code"' ],
      // 'display': ['Oswald', ],
      // 'body': ['Open Sans', ],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
