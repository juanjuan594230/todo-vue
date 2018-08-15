import Vue from 'vue';

/* 没有指定el，mounted和beforeMounted不会执行，知道调用了vm.$mount(el) */
/*  $el在mount阶段才形成，所以DOM相关的操作，一般都在mounted之后执行 */
/* 3:如果有template选项，那么在beforeMount之前，会将template解析成一个render函数 */
/* 4：renderError() 开发环境调用， render()报错，可以在renderError()中捕获 */
/* 5：errorCapture() 线上捕获错误的方法，会向上冒泡 */
const app = new Vue({
  el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: '0'
  },
  // 3: render function exec is between beformount and mounted
  // if render exist in options, vue的构造函数不会从template选项或通过el选项执行的挂载元素中提取的html模板编译渲染函数
  render (h) {
    console.log('render function exec');
    return h('div', {}, this.text);
  },
  beforeCreate () {
    console.log(this.$el, 'before-create');
  },
  created () {
    console.log(this.$el, 'created'); // undifined
  },
  beforeMount () {
    console.log(this.$el, 'before-mount'); // <div id="root"></div>
  },
  mounted () {
    console.log(this.$el, 'mounted'); // <div>0</div> 真实挂载的DOM
  },
  beforeUpdate () {
    console.log(this, 'before-update');
  },
  updated () {
    console.log(this, 'updated');
  },
  // 与组件的keep-alive有关
  activated () {
    console.log(this, 'activated');
  },
  deactivated () {
    console.log(this, 'deactivated');
  },
  beforeDestroy () {
    console.log(this, 'before-destroy');
  },
  destroyed () {
    console.log(this, 'destroyed');
  }
});

// 调用beforeUpdate和updated
/* setInterval(() => {
  app.text += 1;
}, 1000); */

// 调用beforeDestory和destoryed
app.$destroy(); // 销毁vue实例，所有的事件监听和watch
