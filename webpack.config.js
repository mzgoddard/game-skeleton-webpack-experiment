'use strict';

var HtmlWepbackPlugin = require('html-webpack-plugin');
var PreloadPlugin = require('./web_loaders/preload-loader/plugin');

module.exports = {
  context: '.',
  entry: {
    main: './src',
  },
  output: {
    path: 'dist',
    filename: '[hash].js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jquery/,
        loader: 'exports-loader?jQuery!script-loader',
      },
      {
        test: /soundjs/,
        loader: 'exports-loader?createjs!script-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'baggage-loader?[file].styl',
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.(png|bmp)$/,
        loader: 'preload-loader!file-loader',
      },
      {
        test: /\.(wav|mp3|m4a|ogg|opus)$/,
        loader: 'audiosprite-loader',
      },
      {
        test: /en_US/,
        loader: 'i18n-loader',
      },
    ],
  },
  resolve: {
    modulesDirectories: ['node_modules', 'vendor'],
    extension: ['', '.js', '.min.js'],
  },
  plugins: [
    new HtmlWepbackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
      templateData: {
        version: require('./package.json').version,
      },
    }),
    new PreloadPlugin(),
  ],
};
