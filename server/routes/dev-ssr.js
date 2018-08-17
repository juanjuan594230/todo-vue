import Axios from 'axios';

// const Router = require('koa-router');
// const axios = require('axios');
const path = require('path');
// 不会将文件写入磁盘
const MemoryFs = require('memory-fs');
const webpack = require('webpack');
const VueServerRenderer = require('vue-server-renderer');
const fs = require('fs');

const serverConfig = require('../../build/webpack.server.conf');

const serverCompiler = webpack(serverConfig);
const mfs = new MemoryFs();

serverCompiler.outputFileSystem = mfs;

// 打包好的文件
let bundle;
serverCompiler.watch({}, (err, status) => {
  if (err) {
    throw err;
  }
  status = status.toJson();
  status.errors.forEach((err) => {
    console.log(err);
  });
  status.hasWarnings.forEach((warn) => {
    console.log(warn);
  });
  const bundlePath = path.join(serverConfig.output.path, 'vue-ssr-server-bundle.json');
  bundle = JSON.parse(mfs.readdirSync(bundlePath, 'utf-8'));
});

const handleSSR = async (ctx) => {
  if (bundle) {
    ctx.body = 'wait a moment';
    return;
  }
  // 获取客户端打包的js文件
  const clientMainfestResp = await Axios.get(
    'http://127.0.0.1:8000/vue-ssr-client-manifest.json'
  );
  // bundle存在 SSR
  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs')
  );

  const renderer = VueServerRenderer.createBundleRenderer(bundle, {
    inject: false
  });
};
