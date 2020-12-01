// demo2: html-webpack-plugin的使用
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index-demo1.js',

    output: {
        filename: 'bundle-demo1.js',
        path: path.resolve('dist')
    },

    plugins: [
        // new HtmlWebpackPlugin(), // 无参数版
        new HtmlWebpackPlugin({
            template: './src/demo2-html-webpack-plugin.html'
        }), // 有参数版
    ],
};

// webpack打包时错误 Cannot find module 'webpack/lib/node/NodeTemplatePlugin'
// 解决办法：npm link webpack --save-dev
// 该命令的作用是将一个任意位置的npm包链接到全局执行环境，可以看到控制台输出了：
// E:\等等学习\前端\webpackLearning\node_modules\webpack -> C:\Users\周邓\AppData\Roaming\npm\ild-compiler.js',node_modules\webpack
// 之后再执行 webpack 打包，打包成功.