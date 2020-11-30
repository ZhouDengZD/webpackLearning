
// demo1: 最基本的打包案例
const path = require('path');
module.exports = {
    // 入口文件
    entry: './src/index-demo1.js',

    // 出口文件
    output: {
        filename: 'bundle-demo1.js',      // 打包后的文件名称
        path: path.resolve('dist')  // 打包后的目录，必须是绝对路径 
    },
};