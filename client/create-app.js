import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router/index';
import Meta from 'vue-meta';
import './assets/styles/global.styl';

Vue.use(Meta);

export default {
  // 生成一个 vue 实例
  createApp: () => {
    const app = new Vue({
      router,
      store,
      render: h => h(App)
    });
    return { app, router, store };
  }
};
