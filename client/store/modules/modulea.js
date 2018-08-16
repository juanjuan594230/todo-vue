export default {
  // 若没有使用命名空间，模块内部的action、mutations、getters是注册在全局命名空间的
  // 如果希望模块具有更高的封装度和复用性，可以使用namespaced：true
  namespaced: true,
  state: {
    name: 'aaa'
  },
  // 加了namespaced:true，a模块内部的getter在全局的getters中表现为如下形式
  /* getters: {
    'a/nameArrayAaa': fn
  } */
  getters: {
    nameArrayAaa (state) {
      return state.name.split('');
    }
  },
  mutations: {
    upperName (state) {
      state.name = state.name.toUpperCase();
    }
  },
  actions: {
    upperNameAsync (context) {
      setTimeout(() => {
        context.commit('upperName');
      }, 1000);
    }
  }
};
