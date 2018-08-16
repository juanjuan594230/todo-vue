import Vue from 'vue';
import Router from 'vue-router';
// import Todo from '../views/todo/Todo.vue';
// import Login from '../views/login/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    // 路由组件传参
    // path: '/app/:id',
    // props: true,
    path: '/app',
    // component: Todo,
    // 异步组件
    component: () => {
      return import('../views/todo/Todo.vue');
    },
    // 命名视图
    // components: {
    //   default: A, // 匹配默认router-view
    //   sideBar: SideComp // 匹配name为SideComp的router-view
    // },
    // 路由独享钩子
    /* beforeEnter: (to, from, next) => {
      console.log('路由独享钩子');
      next();
    }, */
    name: 'app' // 路由命名
    // 元信息
    // meta: {
    //   title: 'app',
    //   description: 'todo'
    // }
    // 路由嵌套
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  }, {
    path: '/login',
    component: () => {
      return import('../views/login/Login.vue');
    }
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
