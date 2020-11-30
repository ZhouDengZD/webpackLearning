
// // demo1: 最基本的打包案例
// const path = require('path');
// module.exports = {
//     // 入口文件
//     // entry: './src/index-demo1.js', // 或者：
//     entry: __dirname + '/src/index-demo1.js',
//     // __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录：当前文件在根目录下，所以指向值为根目录

//     // 出口文件
//     output: {
//         filename: 'bundle-demo1.js',      // 打包后的文件名称
//         // path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
//         // path: path.resolve(__dirname, 'dist')
//         path: __dirname + '/dist',
//     },
// };


// demo2: 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index-demo1.js',

    output: {
        filename: 'bundle-demo1.js',
        path: path.resolve('dist')
    },

    plugins: [
        new HtmlWebpackPlugin(), // 无参数版
    ],
};

// webpack打包时错误 Cannot find module 'webpack/lib/node/NodeTemplatePlugin'
// 解决办法：npm link webpack --save-dev
// 该命令的作用是将一个任意位置的npm包链接到全局执行环境，可以看到控制台输出了：
// E:\等等学习\前端\webpackLearning\node_modules\webpack -> C:\Users\周邓\AppData\Roaming\npm\ild-compiler.js',node_modules\webpack
// 之后再执行 webpack 打包，打包成功.