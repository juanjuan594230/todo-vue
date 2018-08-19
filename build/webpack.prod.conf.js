const baseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const VueClinetPlugin = require('vue-server-renderer/client-plugin');

const devConfig = {
  mode: 'production',
  entry: path.join(__dirname, '../client/client-entry.js'),
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].[chunkhash:8].js',
    publicPath: '/public/'
  },
  plugins: [
    // 允许创建一个在编译时可以配置的全局变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlPlugin({
      // 会以template.html为模板生成html文件
      template: path.join(__dirname, 'template.html')
    }),
    new ExtractTextPlugin({
      filename: 'styles.[md5:contenthash:hex:20].css',
      allChunks: true
    }),
    new VueClinetPlugin()
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
