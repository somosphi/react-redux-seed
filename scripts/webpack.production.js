const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLESS = new ExtractTextPlugin('css/main.css');

const config = {
  devtool: false,
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'modules',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
    extractLESS,
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      mangle: true,
      comments: false,
      sourceMap: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: extractLESS.extract(['css-loader', 'less-loader']),
      },
    ],
  },
};

module.exports = config;
