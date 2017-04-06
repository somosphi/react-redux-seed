const path = require('path');
const _ = require('lodash');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = require('./webpack.entry.js');

module.exports = (env) => {
  const config = {
    entry,
    output: {
      filename: 'entry/[name].[hash].js',
      path: path.join(__dirname, '..', 'release'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          context: './src/static',
          from: '**/*',
          to: './',
        },
      ]),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [{
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['es2015', 'react'],
            },
          }],
        }, {
          test: /\.(jpg|png|gif)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 30000,
              name: 'img/[name].[ext]',
            },
          }],
        }, {
          test: /\.svg$/,
          use: [{
            loader: 'url-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          }],
        },
      ],
    },
  };

  const chunks = _.keys(entry);
  for (let i = 0; i < chunks.length; i += 1) {
    config.plugins.push(new HtmlWebpackPlugin({
      template: './src/html/index.ejs',
      production: env === 'production',
      filename: `${chunks[i]}.html`,
      chunks: [chunks[i], 'modules'],
      inject: true,
    }));
  }
  return config;
};
