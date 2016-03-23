var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output = {
  filename: '[name].[chunkhash].js',
  publicPath: '',
  path: path.resolve(__dirname, 'dist')
};

config.module.loaders = config.module.loaders.concat([
  { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') }
]);

config.plugins = config.plugins.concat([
  new ExtractTextPlugin('[name].[chunkhash].css'),
  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular', 'firebase']
    },
    compress: {
      warnings: false
    }
  })
]);

module.exports = config;
