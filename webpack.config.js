const webpack = require('webpack');

const _loaders = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      },
      plugins: ["transform-es2015-classes"]
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

const webcomponent = {
  entry: './src/index.js',
  output: {
    filename: './tumblr-feed.js'
  },
  // devtool: 'eval-source-map',
  module: Object.assign({}, _loaders),
  plugins: _plugins
}

const polyfill = {
  entry: './src/polyfill.js',
  output: {
    filename: './tumblr-feed-polyfill.js'
  },
  // devtool: 'eval-source-map',
  module: Object.assign({}, _loaders),
  plugins: _plugins
}

const vanilla = {
  entry: './src/tumblr.js',
  output: {
    filename: './tumblr.js'
  },
  // devtool: 'eval-source-map',
  module: Object.assign({}, _loaders),
  plugins: _plugins
}

module.exports = [
  webcomponent,
  polyfill,
  vanilla
];
