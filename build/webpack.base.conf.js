const path = require('path'); // nodejs 内置
const config = require('../config');
const HtmlPlugin = require('html-webpack-plugin');
const createVueLoaderConfig = require('./vue-loader.config.js');

const isDev = process.env.NODE_ENV === 'development';

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

const baseConfig = {
  context: path.join(__dirname, '../'), // webpack编译的基础目录，入口起点会相对于此目录查找 __dirname  当前执行文件所在目录的完整目录名 ...todo-vue/build
  entry: {
    app: './client/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        // 预处理  使用真正的loader处理之前，先使用eslint-loader做预处理
        enforce: 'pre'
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        // 包含
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')],
        // 忽略
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderConfig(isDev)
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
          name: 'resource/[path]/[name].[ext]'
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
  },
  plugins: [
    new HtmlPlugin({
      // 会以template.html为模板生成html文件
      template: path.join(__dirname, 'template.html')
    })
  ]
};

module.exports = baseConfig;
