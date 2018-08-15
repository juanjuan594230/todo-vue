import Vue from 'vue';

// 应用场景：开发了一个组件，功能完善（但有时候需要扩展，则可以直接extends，不需要重新定义组件）
// $parent 子组件中可以调用
// new Vue() 可以指定parent
const component = {
  template: `
    <div>
      <span v-show="active">see me if active</span><br/>
      <span>{{text}}</span>
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
      type: Boolean
    }
  },
  // 两个mounted都被调用，这里的先调用
  mounted () {
    console.log(2);
  }
};

// 使用基础Vue构造器，创建一个子类，参数是一个包含组件选项的对象
// const CompVue = Vue.extend(component);

// new CompVue({
//   el: '#root',
//   // 传值
//   propsData: {
//     active: true
//   },
//   // 会覆盖选项对象中的对应值
//   data: {
//     text: 123
//   },
//   // 这里的后调用
//   mounted () {
//     console.log(1);
//   }
// });

// extend的第二种方式
const CompVueTwo = {
  extends: component,
  data () {
    return {
      text: 'hahaha'
    };
  },
  mounted () {
    console.log(this.$parent.$options.name);
    console.log('extends 2');
  }
};

new Vue({
  name: 'root',
  el: '#root',
  template: `<comp-vue-two :active="true"></comp-vue-two>`,
  components: {
    CompVueTwo
  }
});
