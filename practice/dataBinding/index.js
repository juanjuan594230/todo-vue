import Vue from 'vue';

/* vue数据绑定 */
/* {{}} 绑定在vm实例对象上的所有值，以及JS原生类的一些方法可以使用 */
/* 绑定动态属性，使用v-bind指令，简写： */
/* 绑定事件，使用v-on指令，简写@ */
/* style和class的绑定，对象语法和数组语法 */
new Vue({
  el: '#root',
  data: {
    isActive: false
  },
  // template: '<div>{{isActive ? "active" : "no-active"}}</div>'
  template: '<div :class="{active: isActive}"></div>'
});
