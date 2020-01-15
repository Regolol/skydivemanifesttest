import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { i18n } from './i18n';
import './registerServiceWorker';

// Import 3rd party libraries
import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';

// Make jQuery accessible
window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
