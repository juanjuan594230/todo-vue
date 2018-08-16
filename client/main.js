'use strict';
import Vue from 'vue';
import App from './App.vue';
import './assets/styles/global.styl';
import router from './router';
import store from './store/store';

// 全局路由守卫 导航钩子
/* router.beforeEach((to, from, next) => {
  // 可以做一些数据的校验, 验证用户是否登录
  console.log('before each invoked');
  // const noLogin = false;
  // if (noLogin) {
  //   // 登录页面
  //   next('/login');
  // } else {
  //   next();
  // }
  // 若要执行下去，next必须调用
  next();
});

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked');
  next();
});

router.afterEach((to, from) => {
  console.log('after each invoked');
}); */

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root');
