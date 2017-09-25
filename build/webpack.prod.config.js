var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../config')
var htmlconfig = require('./htmlconfig.js')
var htmlconfigArr = htmlconfig.map(function (value) {
  return new HtmlWebpackPlugin(value)
})

module.exports = merge(baseWebpackConfig, {
  module: {
  },
  devServer: {
    contentBase: '../dist',
    hot: false
  },
  devtool: false,
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
    // 提取公用模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // 压缩文件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8 : false
      },
      mangle: {
        screw_ie8: false
      },
      output: { screw_ie8: false },
      sourceMap: false
    })
  ].concat(htmlconfigArr)
})
