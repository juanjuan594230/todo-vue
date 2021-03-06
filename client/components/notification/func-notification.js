import Notification from './Notification.vue';

export default {
  extends: Notification,
  computed: {
    style () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`,
        'z-index': 99
      };
    }
  },
  data () {
    return {
      verticalOffset: 0,
      autoClose: 3000,
      height: 0,
      visible: false
    };
  },
  methods: {
    createTimer () {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false;
        }, this.autoClose);
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    afterEnter () {
      this.height = this.$el.offsetHeight;
    }
  },
  mounted () {
    this.createTimer();
  },
  beforeDestroy () {
    this.clearTimer();
  }
};
