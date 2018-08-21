import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router/index';
import Meta from 'vue-meta';
import Notification from './components/notification';
import Tabs from './components/tabs';
import './assets/styles/global.styl';

Vue.use(Meta);
Vue.use(Notification);
Vue.use(Tabs);

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
