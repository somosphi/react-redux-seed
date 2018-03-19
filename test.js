const merge = require('webpack-merge');
const base = require('./scripts/webpack.base.js');
const build = require('./scripts/webpack.build.js');

const env = 'test';
module.exports = merge(base(env), build(env, {
  bundleAnalyzerPlugin: false,
  splitChunks: false,
}));
