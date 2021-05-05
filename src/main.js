import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles/global.scss';
import './services/api';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
