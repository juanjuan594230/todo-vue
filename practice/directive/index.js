import Vue from 'vue';

/* vue 指令 */
// 1: v-text  类似 {{}}
// 2: v-html
// 3: v-show display:none 存在于文档流中
// 4: v-if 不存在文档流中，会造成重拍和重绘v-else-if  v-else, 要紧跟在v-if的元素后面
// 5：v-for 数组 & 对象； key值 (key值相同的DOM节点复用，不会重新生成)，不要使用index作为key，会造成错乱
// 6：v-on：click
// 8：v-bind:class=""
// 7：v-model="" 表单控件; 修饰符.number .trim .lazy(绑定事件的区别)；自定义组件添加v-model的支持
// 9：v-pre 不解析v-text的东西
// 10：v-cloak (webpack不使用)
// 11：v-once 数据绑定的内容只执行一次
new Vue({
  el: '#root',
  template: `
    <div>
      <div v-text="text" v-show="active"></div>
      <div v-html="html"></div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}-{{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj">{{key}}-{{val}}-{{index}}</li>
      </ul>
      <div>
        <input type="checkbox" v-model="arr" :value="1"/>
        <input type="checkbox" v-model="arr" :value="2"/>
        <input type="checkbox" v-model="arr" :value="4"/>
      </div>
      <div>
        <input type="radio" v-model="picked" :value="1"/>
        <input type="radio" v-model="picked" :value="2"/>
      </div>
    </div>
  `,
  data: {
    text: 0,
    active: false,
    html: '<h1>hello world</h1>',
    arr: [1, 2, 4],
    obj: {
      a: 1,
      b: 2,
      aa: 4,
      c: 3
    },
    picked: 1
  }
});
