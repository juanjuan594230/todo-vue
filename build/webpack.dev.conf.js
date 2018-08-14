const baseConfig = require('./webpack.base.conf.js');
// 合并不同的webpack config
const merge = require('webpack-merge');
const webpack = require('webpack');

const devConfig = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          // style-loader不能开启热重载，需要使用vue-style-loader
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 8000,
    host: '0.0.0.0',  // 外部服务器可访问（localhost、ip均可）
    overlay: true,   // 出现编译错误时，会显示全屏覆盖层
    historyApiFallback: true,  // 任意的404响应都需要被替代为index.html
    // hot: true // 启动webpack的模块热替换特性
  },
  plugins: [
    // 允许创建一个在编译时可以配置的全局变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(), // 启动webpack的模块热替换特性
    new webpack.NoEmitOnErrorsPlugin()
  ],
  // 增强调试功能
  devtool: "#cheap-module-eval-source-map"
}

module.exports = merge(baseConfig, devConfig);