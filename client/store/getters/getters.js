export default {
  filteredTodos (state) {
    if (state.filter === 'all') {
      return state.todos;
    }
    const completed = state.filter === 'completed';
    return state.todos.filter((todo) => {
      return completed === todo.completed;
    });
  }
};
