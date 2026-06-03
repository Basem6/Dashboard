module.exports = {
  plugins: [
    require('postcss-nesting'), // لازم قبل tailwind
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};