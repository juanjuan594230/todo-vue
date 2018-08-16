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
    upperName (state) {
      return state.name.toUpperCase();
    }
  },
  actions: {
    upperNameAsync (context) {
      setTimeout(() => {
        context.submit('upperName');
      }, 1000);
    }
  }
};
