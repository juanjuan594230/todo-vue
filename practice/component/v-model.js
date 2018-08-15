import Vue from 'vue';

// 子组件使用v-model
// 1、组件内部绑定属性，修改数据时，再通过$emit传递给父组件
// 2、父组件中在子组件调用的地方，正常使用v-model

const component = {
  // 使用model，可以自定义属性名和事件名
  model: {
    prop: 'val',
    event: 'change'
  },
  template: `
    <div>
      <input type="text" @input="handleInput" :value="val"/>
    </div>
  `,
  data () {
    return {

    };
  },
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value);
    }
  },
  props: ['val']
};

new Vue({
  el: '#root',
  // v-model相当于 <comp-one @input="compInput" :value="value"></comp-one>
  template: `
    <div>
      <comp-one v-model="value"></comp-one>
    </div>
  `,
  components: {
    CompOne: component
  },
  data: {
    value: '123'
  }
  // methods: {
  //   compInput (value) {
  //     this.value = value;
  //   }
  // }
});
