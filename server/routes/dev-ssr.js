// 处理服务端渲染
const Router = require('koa-router');
const axios = require('axios');
const path = require('path');
// 不会将文件写入磁盘 文件操作
const MemoryFs = require('memory-fs');
const webpack = require('webpack');
// 服务端渲染
const VueServerRenderer = require('vue-server-renderer');
const fs = require('fs');

const serverRender = require('./server-render');
// server webpack 配置文件
const serverConfig = require('../../build/webpack.server.conf');
// 返回一个webpack compiler实例，可以手动触发webpack执行器 watch run等
const serverCompiler = webpack(serverConfig);
const mfs = new MemoryFs();

serverCompiler.outputFileSystem = mfs;

// 记录webpack打包好的文件
let bundle;
// 类似webpack-dev-server,每次修改文件，都会执行一次重新打包
serverCompiler.watch({}, (err, status) => {
  // 打包错误
  if (err) {
    throw err;
  }
  // 非webpack报错
  status = status.toJson();
  status.errors.forEach((err) => {
    console.log(err);
  });
  status.warnings.forEach((warn) => {
    console.log(warn);
  });
  const bundlePath = path.join(serverConfig.output.path, 'vue-ssr-server-bundle.json');
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8')); // 读取webpack打包好的文件
  console.log('new bundle generator');
});

// 根据打包的文件，进行服务端渲染
const handleSSR = async (ctx) => {
  if (!bundle) {
    ctx.body = 'wait a moment';
    return;
  }
  // 获取客户端打包的js文件，通过请求
  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8000/public/vue-ssr-client-manifest.json'
  );
  const clientManifest = clientManifestResp.data;
  // bundle存在 SSR，bundle是不完整的HTML代码，比如没有head,所以需要一个模板
  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8'
  );
  // 创建一个renderRenderer的实例,执行服务端渲染
  const renderer = VueServerRenderer.createBundleRenderer(bundle, {
    // 不自动注入
    inject: false,
    // 自动生成一个带有script标签的js文件引用的字符串，添加到bundle中
    clientManifest
  });

  await serverRender(ctx, renderer, template);
};

const router = new Router();
// 所有的请求都通过router处理
router.get('*', handleSSR);

module.exports = router;
