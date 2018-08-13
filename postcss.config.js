const autoprefixer = require('autoprefixer');  // css属性加前缀

// postcss后处理css代码，通过一系列插件完成，autoprefixer处理css属性的前缀
module.exports = {
  plugins: [
    autoprefixer
  ]
}