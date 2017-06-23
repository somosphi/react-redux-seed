const merge = require('webpack-merge');
const base = require('./scripts/webpack.base.js');
const development = require('./scripts/webpack.development.js');

module.exports = merge(base('development'), development);
