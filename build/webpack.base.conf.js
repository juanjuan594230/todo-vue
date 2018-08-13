const path = require('path');  // nodejs 内置
const config = require('../config');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const baseConfig = {
  context: path.join(__dirname, '../'), // webpack编译的基础目录，入口起点会相对于此目录查找 __dirname  当前执行文件所在目录的完整目录名 ...todo-vue/build
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        // 包含
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'static/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/[name].[ext]'
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = baseConfig;