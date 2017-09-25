var opn = require('opn')
var express = require('express')
var webpackConfig = require('./webpack.dev.config')
var config = require('../config')
var webpack = require('webpack')
var chalk = require('chalk')
var proxyMiddleware = require('http-proxy-middleware')
// 检查环境
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var compiler = webpack(webpackConfig)
// dev-server 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  quiet: true,
  noInfo: true,
  color: true
})
// hot 热加载中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  // log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

var port = config.dev.port
// http代理
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

app.use(devMiddleware)
app.use(hotMiddleware)
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

devMiddleware.waitUntilValid(() => {
  if (config.dev.autoOpenBrowser) {
    opn('http://localhost:' + port + '/views')
  }
  console.log('The environment : ' + process.env.NODE_ENV + '\n')
  console.log(chalk.green('> Listening at ' + 'http://localhost:' + port + '/views\n'))
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
})

