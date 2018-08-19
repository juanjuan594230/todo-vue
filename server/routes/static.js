const Router = require('koa-router');
const send = require('koa-send');

// 处理静态文件的router
const staticRouter = new Router({prefix: '/public'});

staticRouter.get('/*', async (ctx) => {
  await send(ctx, ctx.path);
});

module.exports = staticRouter;
