// mutations 只支持同步，如果写了异步，会认为是不使用commit的方式，直接修改vuex中state状态值
export default {
  updateFilter (state, params) {
    state.filter = params.filter;
  },
  add (state, params) {
    state.todos.push(params.todo);
  },
  delete (state, params) {
    const index = state.todos.findIndex((todo) => {
      return todo.id === params.id;
    });
    state.todos.splice(index, 1);
  },
  update (state, params) {
    const index = state.todos.findIndex((todo) => {
      return todo.id === params.id;
    });
    state.todos[index]['completed'] = !state.todos[index]['completed'];
  },
  clearDone (state) {
    state.todos = state.todos.filter((todo) => {
      return !todo.completed;
    });
  }
};
