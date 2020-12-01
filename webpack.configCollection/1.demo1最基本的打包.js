
// demo1: 最基本的打包案例
const path = require('path');
module.exports = {
    // 入口文件
    // entry: './src/index-demo1.js', // 或者：
    entry: __dirname + '/src/index-demo1.js',
    // __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录：当前文件在根目录下，所以指向值为根目录

    // 出口文件
    output: {
        filename: 'bundle-demo1.js',      // 打包后的文件名称
        // path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
        // path: path.resolve(__dirname, 'dist')
        path: __dirname + '/dist',
    },
};
