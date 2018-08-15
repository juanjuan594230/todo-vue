import Vue from 'vue';

// 1、slot
// 2、scoped slot
// 3、ref
// 4、provide
const ChildComponent = {
  template: `
    <div>child component</div>
  `,
  inject: ['grandPa'],
  mounted () {
    console.log(this.$parent.$options.name); // 上一级的组件实例
    // 如何引用上上一级的组件实例呢？
    console.log(this.grandPa);
  }
};

// 样式组件
const component = {
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,
  // 编译作用域
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  // scoped slot
  template: `
    <div :style="style">
      <slot :value="value"></slot>
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'comp inner'
    };
  },
  components: {
    ChildComponent
  }
};

new Vue({
  name: 'root-comp',
  // provide: {
  //   'grandPa': this
  // },
  // 不提供响应
  provide () {
    return {
      'grandPa': this
    };
  },
  el: '#root',
  components: {
    CompOne: component
  },
  data: {
    value: 'comp parent'
  },
  // template: `
  //   <div>
  //     <comp-one>
  //       <span slot="header">this is header</span>
  //       <span slot="body">this is body</span>
  //     </comp-one>
  //   </div>
  // `
  //  父组件模板的所有东西都会在父级作用域内编译，子组件模板的所有东西都会在子级作用域内编译，因此value值为comp parent
  /* template: `
    <div>
      <comp-one>
        <span>{{value}}</span>
      </comp-one>
    </div>
  ` */
  // scoped slot 可以将子组件内部定义的变量传递过来
  template: `
    <div>
      <comp-one ref="comp">
        <span slot-scope="props" ref="span">{{props.value}}{{value}}</span>
      </comp-one>
    </div>
  `,
  mounted () {
    // console.log(this.$refs.span); // ref用在组件上 组件实例
    // console.log(this.$refs.comp); // ref用在原生html代码上 元素标签
  }
});
