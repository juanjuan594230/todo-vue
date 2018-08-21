'use strict'

module.exports = function(isDev) {
  return {
    preserveWhitespace: true,     // .vue文件的template中的html标签之间的空格去掉
    extractCSS: !isDev,  // 使用extract-text-webpack-plugin自动提取CSS，包括.vue中的style样式
    cssModules: {
      localIdentName: isDev ? '[path].[name].[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    } // 模块化和组合css的流行系统
    // hotReload: false   // 关闭热重载  默认不需要设置，会根据环境变量生成
  }
}
