const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractLESS = new ExtractTextPlugin('css/main.css');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '/js/[name].js',
    path: './release'
  },
  plugins: [
    new CopyWebpackPlugin([
      {context: './src/static', from: '**/*', to: './'}, //copy all static files to release
    ]),
    extractLESS
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loader: extractLESS.extract(['css','less'], { publicPath: '/' })
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader?limit=30000&name=img/[name].[ext]'
      },
      {
        test: /\.svg$/,
        loader: 'file-loader?name=img/[name].[ext]'
      }
    ]
  }
}
