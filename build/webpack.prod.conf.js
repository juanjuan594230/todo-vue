const baseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');

const devConfig = {
  mode: 'production',
  entry: {
    app: './client/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].[chunkhash:8].js'
  },
  plugins: [
    // 允许创建一个在编译时可以配置的全局变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin('styles.[md5:contenthash:hex:20].css'),
    // webpack4中被废弃了 CommonsChunkPlugin
    /* new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // 将webpack相关代码单独打包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }) */
  ],
  // webpack4打包公共文件 
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  module: {
    rules: [
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
  }
}

module.exports = merge(baseConfig, devConfig);