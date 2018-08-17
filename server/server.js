const Koa = require('koa');
const pageRouter = require('./routes/dev-ssr');
const app = new Koa();
const isDev = process.env.NODE_ENV === 'development';

// koa 中间件 记录服务端的请求
app.use(async (ctx, next) => {
  try {
    console.log(ctx);
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

app.use(pageRouter.routes()).use(pageRouter.allowedMethods());

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3333;

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST} ${PORT}`);
});
