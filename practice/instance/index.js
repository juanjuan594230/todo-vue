import Vue from 'vue';

// new Vue({
//   el: '#root',
//   template: '<div>this is content</div>'
// });

const app = new Vue({
  template: '<div ref="div">{{text}}</div>',
  data: {
    text: 0
  }
});
app.$mount('#root');

// setInterval(() => {
//   app.text++;
// }, 1000);

/* vue实例属性 */
// console.log(app.$data);
// console.log(app.$el);
// console.log(app.$options);
// // app.$options.data.text = 2; // 无法修改
// /* app.$data.text = 2; // 可以修改
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function');
// }; */
// console.log(app.$root === app); // true
// console.log(app.$children); // 内部组件列表
// console.log(app.$slots); // {}
// console.log(app.$scopedSlots); // {}
// console.log(app.$refs); // div节点
// console.log(app.$isServer); // false 是否加入了服务端渲染

/* vue实例方法 */
// 需要自己销毁
const unWatch = app.$watch('text', (newVal, oldVal) => {
  console.log(newVal + ' ' + oldVal);
});
unWatch();
// app.$on()
// app.$emit()
// app.$once() 只触发一次
// app.$forceUpdate() 迫使vue实例重新渲染
// app.$set(obj, propName, propVal) // 属性是响应式的
// app.$delete(obj, key)
// app.$nextTick(callback) // 将回调延迟到下次DOM更新循环之后执行。在修改数据之后立即使用，然后等待DOM更新（异步）
