const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLESS = new ExtractTextPlugin('css/main.css');

const dev = {
  devServer: {
    historyApiFallback: true,
    inline: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    extractLESS,
  ],
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: extractLESS.extract(['css', 'less'], { publicPath: '/' }),
      },
    ],
  },
};

module.exports = merge([base, dev]);


/*

exports.lintJavaScript = function({ paths, options }) {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: paths,
          enforce: 'pre',

          loader: 'eslint-loader',
          options: options,
        },
      ],
    },
  };
};

*/
