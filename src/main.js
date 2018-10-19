import Vue from 'vue';
import App from './App';
import moment from 'moment';
import router from './router';

const locale = window.navigator.userLanguage || window.navigator.language;
import('moment/locale/' + locale.slice(0, 2) + '.js');
moment.locale(locale);

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('LLL');
  }
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router,
}).$mount('#app');
