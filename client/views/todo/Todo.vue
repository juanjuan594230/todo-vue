<template>
  <section class="real-app">
    <div class="tab-container">
      <Tabs :value="filter"  @change="handleTabChange">
        <tab :label="tab" :index="tab" v-for="tab in states" :key="tab"></tab>
      </Tabs>
    </div>
    <input type="text"
           class="add-input"
           autofocus placeholder="接下来要做什么？"
           v-on:keyup.enter="addTodo" />
    <todo-item
      v-for="todo in filteredTodos"
      :todo="todo"
      :key="todo.id"
      @del="deleteTodo"
      >
    </todo-item>
    <helper :filter="filter" :todos="todos" @clear="clearAllCompleted"></helper>
    <!-- 路由嵌套 -->
    <!-- <router-view></router-view> -->
  </section>
</template>

<script>
import TodoItem from './Item.vue';
import Helper from './Helper.vue';
let id = 0;
export default {
  name: 'Todo',
  metaInfo: {
    title: 'The Todo App'
  },
  // 取代$route
  // props: ['id'],
  // z组件内导航守卫
  // beforeRouteEnter 中拿不到this，因为组件还没有被创建，可以在next中传入一个回调获取组件vue实例
  /* beforeRouteEnter (to, from, next) {
    console.log('enter');
    next();
  },
  // app/:id  app/123 -> app/456 被触发，组件复用，参数不同时被触发
  beforeRouteUpdate (to, from, next) {
    console.log('update');
    next();
  },
  beforeRouteLeave (to, from, next) {
    console.log('leave');
    next();
  }, */
  data () {
    return {
      todos: [],
      filter: 'all',
      states: ['all', 'actived', 'completed']
    };
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      console.log(e.target.value);
      e.target.value = '';
    },
    deleteTodo (id) {
      const index = this.todos.findIndex((item) => {
        return item.id === id;
      });
      this.todos.splice(index, 1);
    },
    clearAllCompleted () {
      this.todos = this.todos.filter((todo) => {
        return !todo.completed;
      });
    },
    handleTabChange (value) {
      this.filter = value;
    }
  },
  components: {
    TodoItem,
    Helper
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos;
      }
      const completed = this.filter === 'completed';
      return this.todos.filter((todo) => {
        return completed === todo.completed;
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app {
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input {
  position relative
  margin 0
  width 100%
  font-size 24px
  font-family inherit
  font-weight inherit
  line-height 1.4rem
  outline none
  box-sizing border-box
  padding 16px 16px 16px 60px
  border none
  box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.5)
}
.tab-container {
  background-color #fff
  padding 0 15px
}
</style>

