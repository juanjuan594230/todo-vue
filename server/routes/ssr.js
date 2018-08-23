// 线上环境
/* const serverRender = require('./server-render.js');
const Router = require('koa-router');
const path = require('path');
const VueServerRender = require('vue-server-renderer');
const fs = require('fs');

const handleSSR = async (ctx) => {
  const clientManifest = require('../../dist/vue-ssr-client-manifest.json');
  const bundle = require('../../server-build/vue-ssr-server-bundle.json');
  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8'
  );
  const renderer = VueServerRender.createBundleRenderer(bundle, {
      inject: false,
      clientManifest
    }
  );
  await serverRender(ctx, renderer, template);
}

const pageRouter = new Router();

pageRouter.get('*', handleSSR);

module.exports = pageRouter; */

const Router = require('koa-router');
const path = require('path');
const fs = require('fs');
const VueServerRender = require('vue-server-renderer');
const serverRender = require('./server-render');

const pageRouter = new Router();

pageRouter.get('*', async (ctx) => {
  // const clientManifestResp = await axios.get(
  //   'http://127.0.0.1:8000/public/vue-ssr-client-manifest.json'
  // );
  // const clientManifest = clientManifestResp.data;
  const clientManifest = require('../../public/vue-ssr-client-manifest.json')
  const renderer = VueServerRender.createBundleRenderer(
    path.join(__dirname, '../../server-build/vue-ssr-server-bundle.json'),
    {
      inject: false,
      clientManifest
    }
  );

  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8'
  );
  await serverRender(ctx, renderer, template)
});

module.exports = pageRouter;
