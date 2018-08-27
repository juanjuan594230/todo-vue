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
      >
    </todo-item>
    <helper :filter="filter" :todos="todos"></helper>
  </section>
</template>

<script>
import TodoItem from './Item.vue';
import Helper from './Helper.vue';
import {mapState, mapGetters, mapMutations} from 'vuex';
let id = 0;
export default {
  name: 'Todo',
  metaInfo: {
    title: 'The Todo App'
  },
  data () {
    return {
      // todos: [],
      // filter: 'all',
      states: ['all', 'actived', 'completed']
    };
  },
  methods: {
    addTodo (e) {
      const todo = {
        id: id++,
        content: e.target.value.trim(),
        completed: false
      };
      this.add({
        todo
      });
      e.target.value = '';
    },
    handleTabChange (value) {
      this.updateFilter({
        filter: value
      });
    },
    ...mapMutations({
      // 将this.updateFilter 映射为 this.$store.commit('updateFilter')
      updateFilter: 'updateFilter',
      add: 'add'
    })
  },
  components: {
    TodoItem,
    Helper
  },
  computed: {
    ...mapState(['todos', 'filter']),
    ...mapGetters(['filteredTodos'])
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

