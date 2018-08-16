export default {
  unTodo (state) {
    return state.todos.filter((item) => {
      return !item.done;
    });
  }
  // 返回一个函数
  // unTodo (state) {
  //   return function (id) {
  //     return state.todos.filter((item) => {
  //       return item.id === id;
  //     });
  //   };
  // }
};
