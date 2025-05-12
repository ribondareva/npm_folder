const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv');

dotenv.config({ path: './.env.development' });

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3001,
    open: true,
    hot: true,
  },
});
