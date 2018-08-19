/* const ejs = require('ejs');

module.exports = async (ctx, renderer, template) => {
  ctx.headers['contentType'] = 'text/html';
  // *** information[js path, css path, style标签，title， description...]
  const context = {
    url: ctx.path
  };
  try {
    const appString = await renderer.renderToString(context);
    const title = context.meta.inject();
    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
      title: title.text()
    });
    ctx.body = html;
  } catch (error) {
    ctx.body = "renyujuan";
    console.log('render error', error);
  }
}; */

const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-Type'] = 'text/html'

  const context = { url: ctx.path }

  try {
    const appString = await renderer.renderToString(context)

    // if (context.router.currentRoute.fullPath !== ctx.path) {
    //   return ctx.redirect(context.router.currentRoute.fullPath)
    // }

    const {
      title
    } = context.meta.inject()

    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
      title: title.text(),
      initalState: context.renderState()
    })

    ctx.body = html
  } catch (err) {
    console.log('render error', err)
    throw err
  }
}
