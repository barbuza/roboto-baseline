var path = require('path');
var webpack = require('webpack');
var nib = require('nib');

var config = {
  entry: {
    app: [
      'webpack-dev-server/client?http://127.0.0.1:8080',
      'webpack/hot/dev-server',
      './style.styl',
      './content.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  stylus: {
    use: [nib()]
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loaders: [
          'style',
          'css',
          'autoprefixer',
          'stylus'
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = config;
