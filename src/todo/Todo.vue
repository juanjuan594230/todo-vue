<template>
  <section class="real-app">
    <input type="text" 
           class="add-input" 
           autofocus placeholder="接下来要做什么？" 
           v-on:keyup.enter="addTodo"
    >
    <todo-item 
      v-for="todo in filteredTodos"
      :todo="todo"
      :key="todo.id"
      @del="deleteTodo"
      >
    </todo-item>
    <tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clear="clearAllCompleted"></tabs>
  </section>
</template>

<script>
import todoItem from './Item.vue'
import tabs from './Tabs.vue'
let id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: 'all'
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = '';
    },
    deleteTodo(id) {
      const index = this.todos.findIndex((item) => {
        return item.id === id;
      })
      this.todos.splice(index, 1);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      this.todos = this.todos.filter((todo) => {
        return !todo.completed;
      })
    }
  },
  components: {
    todoItem,
    tabs
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }
      const completed = this.filter === 'completed' ? true : false;
      return this.todos.filter((todo) => {
        return completed === todo.completed
      })
    }
  }
}
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
</style>

