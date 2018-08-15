<template>
  <div id="app">
    <div class="cover"></div>
    <div class="content">
      <todo-header></todo-header>
      <router-link to="/app">app</router-link>
      <router-link to="/login">login</router-link>
      <!-- <Todo></Todo> -->
      <router-view/>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import todoHeader from './layout/Header.vue';
import todoFooter from './layout/Footer.jsx';
// import Todo from './views/todo/Todo.vue';
// import Login from './views/login/login.vue';
export default {
  name: 'App',
  components: {
    todoHeader,
    todoFooter
    // Todo,
    // Login
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
