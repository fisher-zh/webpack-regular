const path = require('path');
// const webpack = require('webpack');
const merge = require('webpack-merge');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "../src"),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        // 提取css
        // new ExtractTextPlugin({
        //     filename: 'build.min.css',
        //     allChunks: true,
        // })
    ]
})