const path = require('path'); // nodejs 内置
const createVueLoaderConfig = require('./vue-loader.config.js');

const isDev = process.env.NODE_ENV === 'development';

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

const baseConfig = {
  target: 'web',
  // context: path.join(__dirname, '../'), // webpack编译的基础目录，入口起点会相对于此目录查找 __dirname  当前执行文件所在目录的完整目录名 ...todo-vue/build
  entry: path.join(__dirname, '../client/client-entry.js'),
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].[hash:8].js',
    publicPath: 'http://127.0.0.1:8000/public/'
    // path: path.join(__dirname, '../public'),
    // publicPath: 'http://127.0.0.1:8000/public/'
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
  }
};

module.exports = baseConfig;
