'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const _plugins = [
  new UglifyJSPlugin({
    sourceMap: true
  }),
]

const webcomponent = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './'),
    filename: 'tumblr-feed.js',
  },
  devtool: 'source-map',
  plugins: _plugins
}

const vanilla = {
  entry: './src/tumblr.js',
  output: {
    path: path.join(__dirname, './'),
    filename: 'tumblr.js',
  },
  devtool: 'source-map',
  plugins: _plugins
}

module.exports = [
  webcomponent,
  vanilla
];
