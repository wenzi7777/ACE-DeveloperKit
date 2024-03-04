const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js', // 插件的入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录，请勿修改
    filename: 'entry.js', // 输出文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'asset/source',
      }
    ],
  }
};

