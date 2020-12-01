const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: __dirname + '/src/index-demo1.js',

    output: {
        filename: 'bundle-demo1.js',      // 打包后的文件名称
        path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
};
