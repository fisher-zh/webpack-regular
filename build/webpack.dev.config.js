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
        publicPath: '/',
        // noInfo: true,
        host: config.devServer.host || 'localhost',
        port: config.devServer.port || 8080,
        proxy: config.devServer.proxy || {},
        stats: 'minimal'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'less-loader',
                ],
            },
        ]
    },
    plugins: [
        // 模块热替换
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})
