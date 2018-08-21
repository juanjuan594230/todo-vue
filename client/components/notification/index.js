import Notification from './Notification.vue';
import notify from './function';

export default (Vue) => {
  Vue.component(Notification.name, Notification);
  // 每一个vue实例都有
  Vue.prototype.$notify = notify;
};
