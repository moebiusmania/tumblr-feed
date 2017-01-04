const webpack = require('webpack');

const _loaders = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }
  ]
}

const _plugins = [
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: { warnings: false },
    output: {comments: false}
  })
]

const demo = {
  entry: './src/polyfill.js',
  output: {
    filename: './demo/tumblr-feed.js'
  },
  // devtool: 'eval-source-map',
  module: Object.assign({}, _loaders),
  plugins: _plugins
}

module.exports = [
  demo
];
