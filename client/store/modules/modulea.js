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
  /* state: {
    a: {
      name: 'aaa'
    }
    // 其余全局的state
  } */
  getters: {
    // rootState是全局的state，state为模块a内的state
    nameArrayAaa (state, getters, rootState) {
      const _str = state.name + rootState.count;
      return _str.split('');
    }
  },
  mutations: {
    upperName (state) {
      state.name = state.name.toUpperCase();
    }
  },
  actions: {
    // 局部context {state, commit, rootSatet}
    upperNameAsync (context) {
      setTimeout(() => {
        context.commit('upperName');
      }, 1000);
    }
    // 如何调用全局的mutations
    // context.commit('updateCount', {root: true})
    // 如何调用模块间的mutations 模块b没有添加namespaced
    // context.commit('upperNameBbb', {root: true})
    // 如何调用模块间的mutations 模块b添加namespaced
    // context.commit('b/upperNameBbb', {root: true})
  }
};
