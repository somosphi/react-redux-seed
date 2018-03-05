const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = require('./webpack.entry.js');

const babelrc = fs.readFileSync(path.join(__dirname, '..', '.babelrc')).toString();

module.exports = (env) => {
  return {
    entry,
    output: {
      filename: 'js/index.js',
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
      new HtmlWebpackPlugin({
        template: './src/html/index.ejs',
        production: env === 'production',
        filename: 'index.html',
        inject: true,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [{
            loader: 'babel-loader',
            options: JSON.parse(babelrc),
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
};
