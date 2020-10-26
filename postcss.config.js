module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
      ],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
    // ...
  ],
};
