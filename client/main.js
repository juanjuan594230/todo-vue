'use strict';
import Vue from 'vue';
import App from './App.vue';
import './assets/styles/global.styl';
import router from './router';

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root');
