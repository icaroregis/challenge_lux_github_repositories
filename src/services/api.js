import axios from 'axios';
import Vue from 'vue';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://api.github.com/',
    });

    // Vue.prototype.$http = axios.create({
    //   method: 'post',
    //   baseURL: 'https://salve-github-database-default-rtdb.firebaseio.com/',
    // });
  },
});

// const api = axios.create({
//   baseURL: 'https://api.github.com/',
// });

// export default api;
