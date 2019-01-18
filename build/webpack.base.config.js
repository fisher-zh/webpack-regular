const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '../src/main'),
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.html$/, loader: 'raw-loader' },
        ]
    },
    // 在配置中添加插件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.template.html'),
            inject: true
        }),
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助 ServiceWorkers 快速启用
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        })
    ]
}
