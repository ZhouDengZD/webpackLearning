
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',      // 打包后的文件名称
        path: path.resolve('dist'),  // 打包后的目录，必须是绝对路径
    },
    // 处理对应模块
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],             // 对应的插件
    // 开发服务器配置
    devServer: {
        port: 8888, // 端口号 设置 默认8080
        open: true, // 自动打开浏览器 默认不打开
    },
};
