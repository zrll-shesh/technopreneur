/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2F4F8',
        ink: '#0C1236',
        cobalt: '#2337D9',
        marker: '#FFE14D',
        pine: '#127A5A',
        rose: '#FF5D73',
        mist: '#DCE2EE',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', '"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        hand: ['Kalam', '"Comic Sans MS"', 'cursive'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
