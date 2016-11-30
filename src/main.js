import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';
import Vue from 'vue';
import router from './router';

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app');
