import createAppObj from './create-app';

const { app, router } = createAppObj.createApp();
router.onReady(() => {
  app.$mount('#root');
});
