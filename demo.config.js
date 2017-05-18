'use strict';

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const _plugins = [
  new UglifyJSPlugin({
    sourceMap: true
  }),
]

const demo = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './demo'),
    filename: 'tumblr-feed.js',
  },
  devtool: 'source-map',
  plugins: _plugins
}

module.exports = [
  demo
];
