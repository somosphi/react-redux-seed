const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const dev = {
  devServer: {
    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only'
  }
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
