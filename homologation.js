const merge = require('webpack-merge');
const base = require('./scripts/webpack.base.js');
const build = require('./scripts/webpack.build.js');

const env = 'homologation';
module.exports = merge(base(env), build(env, {
  bundleAnalyzerPlugin: false,
  splitChunks: false,
}));
