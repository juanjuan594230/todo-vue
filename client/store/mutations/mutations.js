// mutations 只支持同步，如果写了异步，会认为是不使用commit的方式，直接修改vuex中state状态值
export default {
  updateCount (state, obj) {
    state.count += obj.step;
  },
  increment (state) {
    state.count++;
    // Error in callback for watcher "function () { return this._data.$$state }": "Error: [vuex] Do not mutate vuex store state outside mutation handlers."
    // setTimeout(() => {
    //   state.count++;
    // }, 1000);
  }
};
