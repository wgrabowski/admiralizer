var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');

config.output = {
  filename: '[name].[hash].js',
  publicPath: '/',
  path: path.resolve(__dirname, 'client')
};

config.module.loaders = config.module.loaders.concat([
  { test: /\.scss$/, loader: 'style!css!postcss!sass' }
]);

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
