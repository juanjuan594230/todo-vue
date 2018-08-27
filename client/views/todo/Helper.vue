<template>
  <div class="helper">
    <span class="left">{{unFinishedToLength}} items left</span>
    <span class="clear" @click="clearAllCompleted">clear completed</span>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    clearAllCompleted () {
      this.clearDone();
    },
    ...mapMutations({
      clearDone: 'clearDone'
    })
  },
  computed: {
    unFinishedToLength () {
      return this.todos.filter((todo) => {
        return !todo.completed;
      }).length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.helper {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 30px;
  background-color: #fff;
  font-size: 14px;
  font-smoothing: antialiased;
}
.left, .clear, .tabs {
  padding: 0 10px;
  box-sizing: border-box;
}
.left, .clear {
  width: 151px;
}
.left {
  text-align: left;
}
.clear {
  text-align: right;
  cursor: pointer;
}
.tabs {
  width: 200px;
  display: flex;
  justify-content: space-around;
  * {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid rgba(175, 47, 47, 0);
    &.actived {
      border-color: rgba(175, 47, 47, 0.4);
      border-radius: 5px;
    }
  }
}
</style>
