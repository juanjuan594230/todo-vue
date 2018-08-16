export default {
  // 可以添加异步操作代码
  // context 拥有store的所有属性和方法，但是他们俩不同
  updateCountSync (context, data) {
    setTimeout(() => {
      // set
      context.commit('updateCount', data);
    }, 1000);
  },
  actionA (context, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateCount', data);
        resolve();
      }, 1000);
    });
  }
};
