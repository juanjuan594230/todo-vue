<template>
  <div id="app">
    <div class="cover"></div>
    <div class="content">
      <todo-header></todo-header>
      <p>{{counter}}</p>
      <p>{{moduleA}}</p>
      <ul>
        <li v-for="(item, index) in nameArrayAaa" :key="index">{{item}}</li>
      </ul>
      <ul>
        <li v-for="item in unTodos" :key="item.id">{{item.desc}}</li>
      </ul>
      <!-- 使用路由命名，可以这样写router-link的to属性 -->
      <router-link :to="{name: 'app'}">app</router-link>
      <router-link to="/login">login</router-link>
      <!-- <router-link to="/app/test">test</router-link> -->
      <!-- <Todo></Todo> -->
      <transition name="fade">
        <router-view/>
      </transition>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import todoHeader from './layout/Header.vue';
import todoFooter from './layout/Footer.jsx';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  name: 'App',
  components: {
    todoHeader,
    todoFooter
  },
  mounted () {
    console.log(this.$store);
    /* setTimeout(() => {
      this.increment();
    }, 1000);
    this.updateCount({step: 999}); */
    // this.updateCountSync({step: 999});
    /* this.actionA({step: 1000}).then(() => {
      console.log('done');
    }); */
    // this.upperName();
    this.upperNameAsync();
  },
  methods: {
    // 组件内访问mutations
    // 1: this.$store.commit('mutations type')
    // 将this.increment 映射为 this.$store.commit('updateCount')
    // increment () {
    //   this.$store.commit('increment');
    // },
    // updateCount () {
    //   this.$store.commit('updateCount', {step: 10});
    // }
    // 2: mapMutations
    ...mapMutations({
      // 将this.increment 映射为 this.$store.mutations.commit('increment')
      'increment': 'increment',
      // 支持传递参数 将this.increment(obj) 映射为 this.$store.mutations.commit('increment', obj)
      'updateCount': 'updateCount',
      'upperName': 'a/upperName'
    }),
    // mudule
    /* upperName () {
      console.log('aaa');
      this.$store.commit('a/upperName');
    }, */
    // 组件内触发action
    // 1、this.$store.dispatch('updateCountSync'， payload)
    /* updateCountSync () {
      this.$store.dispatch('updateCountSync', {step: 998});
    } */
    // 2、mapActions
    ...mapActions({
      'updateCountSync': 'updateCountSync',
      'actionA': 'actionA',
      'upperNameAsync': 'a/upperNameAsync'
    })
    // module
    /* upperNameAsync () {
      this.$store.dispatch('a/upperNameAsync');
    } */
  },
  computed: {
    // 组件内通过this.$store获取
    /* count () {
      return this.$store.state.count;
    } */
    // 组件内通过mapState获取
    // 1、计算属性与state中的属性同名，直接使用字符串数组的形式获取
    // ...mapState(['count'])
    // 2、计算属性与state中的属性不同名
    ...mapState({
      // 相当于 state => state.count
      // 'counter': 'count'
      // 那么同理可以这样写
      counter: state => state.count,
      moduleA: state => state.a.name
    }),
    // 组件内访问getter
    // 1: this.$store.属性
    /* unTodos () {
      return this.$store.getters.unTodo;
    } */
    // 2: 通过方法访问 , 可以传递参数
    /* unTodos () {
      return this.$store.getters.unTodo(1);
    } */
    //  3: mapGetters
    ...mapGetters({
      // 将this.unTodos 映射为 this.$store.getters.untodo
      unTodos: 'unTodo',
      nameArrayAaa: 'a/nameArrayAaa'
    })
    // module
    /* nameArrayAaa () {
      // namespaced访问
      return this.$store.getters['a/nameArrayAaa'];
      // 无namespaced访问，直接挂在全局的getters下
      return this.$store.getters['nameArrayAaa'];
    } */
    /* moduleA () {
      return this.$store.state.a.name;
    } */

  }
};
</script>

<style lang="stylus" scoped>
  #app {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .cover {
    position: absolute;
    background-color: #999;
    opacity: 0.7;
    z-index: 10;
    width: 100%;
    height: 100%;
  }
  .content {
    position relative
    z-index 11
  }
</style>
