import Vue from 'vue';
import Vuex from 'vuex';
import defaultState from './state/state';
import mutations from './mutations/mutations';
import getters from './getters/getters';
import actions from './actions/actions';

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
  // 分模块
  // 组件内 this.$store.state.a.text
  // mapState({
  //   a: (state) => {
  //     return state.a.text
  //   }
  // })
  /* methods: {
    ...mapMutations(['a/updateText'])
  }
  this[a/updateText]; */
  /* mudules: {
    a: {
      namespaced: true,
      state: {
        text: 1
      },
      mutations: {
        updateText (state, text) {
          state.text = text;
        }
      },
      getters: {
        textPlus (state) {
          return state.text + 1;
        }
      }
    },
    b: {
      state: {
        text: 2
      }
    }
  } */
});
