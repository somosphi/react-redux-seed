const webpack = require("webpack");
const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const keys = require('lodash/keys');
const entry = require('./webpack.entry.js');

const babelrc = fs.readFileSync(path.join(__dirname, '..', '.babelrc')).toString();

const base = (env) => {
  const envs = ['production', 'homologation', 'test', 'development'];
  if (envs.indexOf(env) === -1) {
    throw new Error(`env '${env}' não suportado`);
  }

  const config = {
    entry,
    output: {
      filename: 'js/[name].js',
      path: path.join(__dirname, '..', 'release'),
      // publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        config: path.join(__dirname, '..', 'src', 'config', env === 'development' ? 'test' : env),
      },
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          context: './src/static',
          from: '**/*',
          to: './',
        },
      ]),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(env === 'development' ? 'development' : 'production'),
        },
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

  const chunks = keys(entry);
  for (let i in chunks) {
    config.plugins.push(new HtmlWebpackPlugin({
      template: './src/html/index.ejs',
      production: env === 'production',
      filename: chunks[i] + '.html',
      chunks: [chunks[i], 'modules'],
      inject: true,
    }));
  }

  return config;
};

module.exports = base;
