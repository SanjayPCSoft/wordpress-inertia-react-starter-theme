let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist')
  .react() // Add .react() to process React components
  .setPublicPath('dist')
  .version();
