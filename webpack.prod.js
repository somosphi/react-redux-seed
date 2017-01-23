const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJsPlugin = require("webpack-uglify-js-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractLESS = new ExtractTextPlugin('css/main.[contenthash].css');

const prod = {
  output: {
    filename: '/js/[name].[chunkhash].js',
    path: './release'
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJsPlugin(require('./uglify.config.js')),
    extractLESS
  ],
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: extractLESS.extract(['css','less'], { publicPath: '/' })
      }
    ]
  }
};

module.exports = merge([base, prod]);
