import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router/index';

import './assets/styles/global.styl';

export default {
  createApp: () => {
    const app = new Vue({
      router,
      store,
      render: h => h(App)
    });
    return { app, router, store };
  }
};
