const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const config = require('../config');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        hot: true,
        proxy: config.devServer.proxy
    },
    plugins: [
        // 模块热替换
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})
