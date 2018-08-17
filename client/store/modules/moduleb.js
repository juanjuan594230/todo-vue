export default {
  state: {
    name: 'aaa'
  },
  getters: {
    nameArrayBbb (state) {
      return state.name.split('');
    }
  },
  mutations: {
    upperNameBbb (state) {
      return state.name.toUpperCase();
    }
  },
  actions: {
    upperNameAsync (context) {
      setTimeout(() => {
        context.commit('upperNameBbb');
      }, 1000);
    }
  }
};
