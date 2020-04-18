import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vue-social-sharing'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
