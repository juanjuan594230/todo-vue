import Component from './func-notification';
import Vue from 'vue';

const NotificationConstructor = Vue.extend(Component);

const instances = [];
let seed = 1;

const remove = (instance) => {
  if (!instance) {
    return;
  }
  const len = instances.length;
  const index = instances.findIndex((item) => {
    return item.id === instance.id;
  });
  instances.splice(index, 1);

  if (len <= 1) {
    return;
  }
  const removeHeight = instance.vm.height;
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset - removeHeight - 16);
  }
};

const notify = (options) => {
  // 涉及DOM操作，不能在服务端运行
  if (Vue.prototype.$isServer) {
    return;
  }
  // 对象解构赋值
  const {
    autoClose,
    ...rest
  } = options;
  const instance = new NotificationConstructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  });
  const id = `notification_${seed++}`;
  instance.id = id;
  // 生成el，但未挂载
  instance.vm = instance.$mount();
  // 挂载到页面的某个元素下
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;

  let verticalOffset = 0;
  instances.forEach((item) => {
    verticalOffset += item.vm.$el.offsetHeight + 16;
  });
  verticalOffset += 16;
  instance.verticalOffset = verticalOffset;
  instances.push(instance);
  // 监听消失动画执行完毕的事件
  instance.vm.$on('closed', () => {
    remove(instance);
    document.body.removeChild(instance.vm.$el);
    instance.vm.$destroy();
  });
  // 监听手动关闭事件，触发消失动画执行完毕事件
  instance.vm.$on('close', () => {
    instance.vm.visible = false;
  });
  instance.vm.$on('entered', () => {

  });
  return instance.vm;
};

export default notify;
