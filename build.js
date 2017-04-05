const merge = require('webpack-merge');
const base = require('./scripts/webpack.base.js');
const production = require('./scripts/webpack.production.js');

module.exports = merge(base('production'), production);
