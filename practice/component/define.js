import Vue from 'vue';

/* 组件注册，全局注册 & 局部注册 */
/* 1：组件中的data是一个function, 数据不共享 */
// 2：props 父组件向子组件传值; 不要在子组件中修改props中的属性
// 3：通过触发事件，想父组件传递消息，由父组件修改props
// 4: props数据验证 props=[a, b, c] props={a:{type: Object, required: true}}

const component = {
  template: `
    <div>
      <span v-show="active">see me if active</span>
      <button @click="handleClick">click</button>
    </div>
  `,
  data () {
    // 每次返回一个新的obj
    return {
      text: 'renyujuan'
    };
  },
  props: {
    active: {
      type: Boolean,
      // required: true,
      // 默认值 简单类型
      // default: false,
      // 引用类型
      // default () {
      //   return {

      //   };
      // }
      // 自定义验证props
      validator (value) {}
    }
  },
  methods: {
    handleClick () {
      this.$emit('active-change');
    }
  }
};

/* 全局定义 组件开头大写，其余按驼峰 */
// Vue.component('Comp', component);

new Vue({
  el: '#root',
  data () {
    return {
      active: true
    };
  },
  template: `
    <div>
      <comp-one v-bind:active="active" @active-change="handleActiveChange"></comp-one>
      <comp-one v-bind:active="active" @active-change="handleActiveChange"></comp-one>
    </div>
  `,
  // 局部注册
  components: {
    CompOne: component
  },
  methods: {
    handleActiveChange () {
      this.active = !this.active;
    }
  }
});
