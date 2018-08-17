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

// 动态注册模块
/* store.registerModule('c', {
  state: {
    name: 'ccc'
  }
}); */

// watch  监听第一个参数的返回值
/* store.watch(state => state.count, (newVal) => {
  console.log('new count watched', newVal);
}); */

// subscribe 监听所有的mutations调用
/* store.subscribe((mutation, state) => {
  console.log(mutation.type);
  console.log(mutation.payload);
}); */

// 监听所有的actions调用
/* store.subscribeAction((action, state) => {
  console.log(action.type);
  console.log(action.payload);
}); */

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root');
