import createAppObj from './create-app';

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createAppObj.createApp();
    // ??? 推进路由记录
    router.push(context.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject(new Error('no matched'));
      }
      context.meta = app.$meta();
      resolve(app);
    });
  });
};
