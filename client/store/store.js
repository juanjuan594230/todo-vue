import Vue from 'vue';
import Vuex from 'vuex';
import defaultState from './state/state';
import mutations from './mutations/mutations';
import getters from './getters/getters';
import actions from './actions/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // 只能通过mutations修改state中的状态，线上不要这样使用
  state: defaultState,
  mutations,
  getters,
  actions
});
