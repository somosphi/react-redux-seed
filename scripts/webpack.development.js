const webpack = require('webpack');
const eslintFormatter = require('eslint-friendly-formatter');

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
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        options: {
          formatter: eslintFormatter,
        },
      }, {
        test: /\.(less|css)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
        }],
      },
    ],
  },
};

module.exports = config;
