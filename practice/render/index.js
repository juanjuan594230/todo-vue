import Vue from 'vue';

// nativeOn & on
const component = {
  name: 'comp',
  props: ['someProp'],
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  // template最终会被编译成render方法
  // 创建的是一个虚拟DOM的节点实例
  render (h) {
    return h('div', {
      style: this.style,
      on: {
        click: () => {
          this.$emit('click');
        }
      }
    }, [this.$slots.default, this.someProp]);
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'comp inner'
    };
  }
};

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data: {
    value: 'comp parent'
  },
  // template: `
  //   <div>
  //     <comp-one ref="comp" :someProp="123">
  //       <span ref="span">{{value}}</span>
  //     </comp-one>
  //   </div>
  // `,
  // 上面的template相当于下面的render方法
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        someProp: '111'
      },
      on: {
        click: this.handleClick
      },
      // 自动绑定到组件根节点的原生DOM上,组件上无需再使用￥emit
      nativeOn: {
        click: this.handleClick
      }
    }, [
      createElement('span', {
        ref: 'span'
      }, this.value)
    ]);
  },
  mounted () {
    console.log(222);
  },
  methods: {
    handleClick () {
      console.log('click');
    }
  }
});
