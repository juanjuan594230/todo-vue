import Vue from 'vue';
import Router from 'vue-router';
import Todo from '../views/todo/Todo.vue';
import Login from '../views/login/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/app',
    component: Todo
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/',
    redirect: '/app'
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  // parseQuery (query) {

  // },
  // stringifyQuery (obj) {

  // },
  // fallback: true,
  mode: 'history' // 还有一个选项hash http://localhost:8000/#/app
  // base: '/base/' // 基路径 http://localhost:8000/base/app
  // 修改router-link样式 区别是什么？
  // linkActiveClass: 'active-link', // 不完全匹配时，会加这个class
  // linkExactActiveClass: 'exact-active-link' // 完全匹配的情况下，会加上这个class
});
