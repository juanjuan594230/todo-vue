<template>
  <div id="app">
    <div class="cover"></div>
    <div class="content">
      <todo-header></todo-header>
      <transition name="fade">
        <router-view/>
      </transition>
      <button @click="notify"> add notify</button>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import todoHeader from './layout/Header.vue';
import todoFooter from './layout/Footer.jsx';
export default {
  name: 'App',
  metaInfo: {
    title: 'renyujuan\'s Todo App'
  },
  components: {
    todoHeader,
    todoFooter
  },
  methods: {
    notify () {
      this.$notify({
        content: 'test',
        btn: 'close'
      });
    }
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
