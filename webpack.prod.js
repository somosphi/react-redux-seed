const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJsPlugin = require("webpack-uglify-js-plugin");

const prod = {

  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJsPlugin(require('./uglify.config.js'))
  ]

};

module.exports = merge([base, prod]);
