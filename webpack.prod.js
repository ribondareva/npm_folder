const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.production' });

module.exports = merge(common, {
  mode: 'production',
  devtool: 'inline-source-map',  
});
