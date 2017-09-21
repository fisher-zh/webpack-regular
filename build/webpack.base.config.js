var path = require('path')
var webpack = require('webpack')
var entry = require('./entry.js')

module.exports = {
  entry: entry, // 入口
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
       test: /\.css$/,
       exclude: /node_modules/,
       include: path.resolve(__dirname, "./pages"),
       use: [
         'style-loader',
         'css-loader'
       ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              'transform-runtime',
              "transform-es3-property-literals",
              "transform-es3-member-expression-literals"
            ]
          }
        }
      }
    ]
  }
}

