'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.config');
const config = require('../config');

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true
  }
});

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(config.devServer.port, config.devServer.host, () => {
  console.log(`Starting server on http://${config.devServer.host}:${config.devServer.port}`);
});
