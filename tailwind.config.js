/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/assets/hero-image.png')",
        'video-placeholder': "url('/assets/stockimage.png'), linear-gradient(to bottom , #ee2e1d, #ffb1b5)",
        playbtn: "url('/assets/playbtn.png')",
      },
      colors: {
        redish: '#ee2d1c',
        blackish: '#4c4c51',
        blueish: '#88939e',
      },
    },
  },
  plugins: [],
}
