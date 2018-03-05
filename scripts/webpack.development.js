const webpack = require('webpack');

const less = {
  test: /\.(less|css)$/,
  use: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
  }, {
    loader: 'less-loader',
  }],
};

const sass = {
  test: /\.(sass|scss|css)$/,
  use: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
  }, {
    loader: 'sass-loader',
  }],
}

const config = {
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      less,
      // sass,
    ],
  },
};

module.exports = config;
