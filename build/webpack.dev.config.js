var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../config')
var htmlconfig = require('./htmlconfig.js')

var htmlconfigArr = htmlconfig.map(function (value) {
  return new HtmlWebpackPlugin(value)
})

module.exports = merge(baseWebpackConfig, {
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    contentBase: '../dist',
    compress: true,
    port: 8090,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
  ].concat(htmlconfigArr)
})


