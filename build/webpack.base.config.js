const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        })
    ]
}
