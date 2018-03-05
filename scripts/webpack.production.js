const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const less = {
  test: /\.less$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          minimize: true
        }
      },
      { loader: "less-loader" },
    ],
    publicPath: "/build"
  })
};

const sass = {
  test: /\.sass$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          minimize: true
        }
      },
      { loader: "sass-loader" },
    ],
    publicPath: "/build"
  })
};

const config = {
  devtool: false,
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: "vendor",
      filename: "entry/vendor.min.js",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      // analyzerMode: 'static',
    }),
    new ExtractTextPlugin("css/[name].css"),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          unused: false,
          drop_console: true,
        },
        safari10: false,
        toplevel: false,
        warnings: false,
      },
    }),
  ],
  module: {
    rules: [
      less,
      // sass,
    ]
  }
};

module.exports = config;
