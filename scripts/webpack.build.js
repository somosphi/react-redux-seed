const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const less = {
  test: /\.(less|css)$/,
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
  test: /\.(sass|scss|css)$/,
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
module.exports = (env, options = {}) => {
  const { bundleAnalyzerPlugin, splitChunks } = options;

  const config = {
    devtool: false,
    optimization: {},
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
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

  if (bundleAnalyzerPlugin) {
    config.plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'server',
    }));
  }

  if (splitChunks) {
    config.optimization.splitChunks = {
      chunks: 'all',
      name: "modules",
      filename: "entry/modules.js",
    };
  }

  return config;
}
