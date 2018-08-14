<template>
  <div id="app">
    <div class="cover"></div>
    <div class="content">
      <todo-header></todo-header>
      <Todo></Todo>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import todoHeader from './layout/Header.vue'
import todoFooter from './layout/Footer.jsx'
import Todo from './views/todo/Todo.vue'
export default {
  name: 'App',
  components: {
    todoHeader,
    todoFooter,
    Todo
  }
}
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
