const Koa = require('koa');
const send = require('koa-send');
const path = require('path');
const staticRouter = require('./routes/static');
const app = new Koa();
const isDev = process.env.NODE_ENV === 'development';

// koa 中间件 记录服务端的请求
app.use(async (ctx, next) => {
  try {
    // 记录请求的路径
    console.log(`request with path ${ctx.path}`);
    await next();
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    if (isDev) {
      ctx.body = error.message;
    } else {
      ctx.body = 'please try again later';
    }
  }
});

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', {
      root: path.join(__dirname, '../')
    });
  } else {
    await next();
  }
})

let pageRouter;
if (isDev) {
  pageRouter = require('./routes/dev-ssr');
} else {
  pageRouter = require('./routes/ssr');
}
app.use(staticRouter.routes()).use(staticRouter.allowedMethods());
// koa router
app.use(pageRouter.routes()).use(pageRouter.allowedMethods());

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3333;

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`);
});
