const baseConfig = require('./webpack.base.conf.js');
const path = require('path');
// 合并不同的webpack config
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueServerPlugin = require('vue-server-renderer/server-plugin');

const devConfig = {
  // 允许webpack以node适用方式处理动态导入，编译vue组件时，vue-loader输出面向服务器代码
  target: 'node',
  mode: 'development',
  entry: path.resolve(__dirname, '../client/server-entry.js'),
  // json文件
  output: {
    // 使用node风格导出模块 module.export
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  // 不打包这部分文件
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [
      // {
      //   test: /\.styl$/,
      //   use: [
      //     // style-loader不能开启热重载，需要使用vue-style-loader
      //     'vue-style-loader',
      //     'css-loader',
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         sourceMap: true
      //       }
      //     },
      //     'stylus-loader'
      //   ]
      // }
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          // 编译后使用什么loader来提取css文件
          fallback: 'style-loader',
          // 使用什么loader去编译源文件，源文件为stylus
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    // 允许创建一个在编译时可以配置的全局变量
    new webpack.DefinePlugin({
      // 'process.env': {
      //   NODE_ENV: '"development"'
      // },
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new ExtractTextPlugin('styles.[md5:contenthash:hex:20].css'),
    // 将服务器的整个输出构建为单个JSON文件的插件
    new VueServerPlugin()
  ],
  // 增强调试功能  webpack4默认执行devtool
  devtool: 'source-map'
};

module.exports = merge(baseConfig, devConfig);
