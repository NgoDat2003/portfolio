/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Warm "paper & ink" palette: cream paper, brown-black ink, pastel accents.
      colors: {
        paper: '#FAF4EA',      // page background
        card: '#FFFCF7',       // raised surfaces (cards, strips)
        ink: {
          DEFAULT: '#2A231F',  // primary text, borders, hard shadows
          soft: '#5C524B',     // body copy
        },
        muted: '#857A71',      // meta text, captions
        accent: {
          DEFAULT: '#D9654B',  // coral: links, underlines, highlights
          dark: '#B94E36',
        },
        marker: '#F6DE8D',     // highlighter yellow
        pastel: {
          sage: '#D5E6CB',
          peach: '#F8D9CF',
          butter: '#F8EBB5',
          sky: '#D8E6EF',
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['"Patrick Hand"', 'cursive'],
      },
      boxShadow: {
        // Hard offset shadows that read as a hand-drawn drop shadow.
        'sketch-sm': '2px 2px 0 0 #2A231F',
        sketch: '4px 4px 0 0 #2A231F',
        'sketch-lg': '6px 6px 0 0 #2A231F',
      },
    },
  },
  plugins: [],
}
