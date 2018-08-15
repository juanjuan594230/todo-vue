import Vue from 'vue';

/* 想要显示的数据，需要通过一些计算来得到，可以使用计算属性 */
/* 计算属性可以设置get和set */
/* watch更多的时候，是监听到某个数据的变化后，做某些操作 */
/* 不要在watch和computed中修改依赖值或监听的值，否则有可能造成死循环 */
new Vue({
  el: '#root',
  template: `<div>
              <p>name:{{fullname}}</p>
              <p>name:{{getFullName()}}</p>
              <p>number:{{number}}</p>
              <p><input type="text" v-model="number"/></p>
              <p>firstname<input type="text" v-model="firstname"/></p>
              <p>lastname<input type="text" v-model="lastname"/></p>
              <p>fullname<input type="text" v-model="fullname"/></p>
              <p>obj.a<input type="text" v-model="obj.a"/></p>
            </div>`,
  data: {
    firstname: 'ren',
    lastname: 'yujuan',
    fullname: '',
    number: 0,
    obj: {
      a: 123
    }
  },
  computed: {
    // 修改number值的时候，该方法不会被重新调用, 只有修改了fullname依赖的属性时，计算方法才会被调用
    /* fullname () {
      console.log('new name');
      return this.firstname + '-' + this.lastname;
    } */
    // computed get set
    /* fullname: {
      get () {
        return this.firstname + '-' + this.lastname;
      },
      set (newVal) {
        const names = newVal.split('-');
        this.firstname = names[0];
        this.lastname = names[1];
      }
    } */
  },
  watch: {
    // watch 默认一开始不会执行
    /* firstname (newname) {
      this.fullname = newname + '-' + this.lastname;
    }, */
    // 会立即执行一次
    firstname: {
      handler (newname) {
        this.fullname = newname + '-' + this.lastname;
      },
      immediate: true
    },
    lastname (newname) {
      this.fullname = this.firstname + '-' + newname;
    },
    obj: {
      // handle 只监听对象引用的变化 this.obj = {}, 但是修改内部的属性无法触发handler
      handler () {
        console.log('obj.a变化了');
      },
      immediate: true,
      // 对对象中的每个属性做监听, 也可以使用'obj.a': {}实现
      deep: true
    }
  },
  methods: {
    // 修改number值的时候，触发vue的重新渲染时，该方法会被重新调用
    getFullName () {
      console.log('get new name');
      return this.firstname + '-' + this.lastname;
    }
  }
});

/* setTimeout(() => {
  app.firstname = 'nen';
}, 1000); */
