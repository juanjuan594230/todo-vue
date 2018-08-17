import Vue from 'vue';
import Vuex from 'vuex';
import defaultState from './state/state';
import mutations from './mutations/mutations';
import getters from './getters/getters';
import actions from './actions/actions';
// import moduleA from './modules/modulea';
// import moduleB from './modules/moduleb';

Vue.use(Vuex);

/* const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, num) {
      state.count++;
    }
  }
});

store.commit('increment');
console.log(store.state.count); */

export default new Vuex.Store({
  strict: true, // 只能通过mutations修改state中的状态，线上不要这样使用
  state: defaultState,
  mutations,
  getters,
  actions
  /* plugins: [
    (store) => {
      // 做一些操作
    }
  ] */
  /* modules: {
    a: moduleA,
    b: moduleB
  } */
});
