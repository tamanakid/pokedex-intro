import Vue from 'vue'

import store from './store';
import router from './router'
import mqConfig from './config/vue-mq.config'

import App from './App.vue'


Vue.config.productionTip = false

mqConfig();

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
