module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{json,png}'],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
