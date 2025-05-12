const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // Передаем переменную окружения в код
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Webpack App',
      inject: true, // чтобы автоматически вставить скрипт      
    }),
  ],
};
