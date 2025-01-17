import Vue from 'vue'
import App from './App.vue'

// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'
import axios from 'axios'
import { store } from './store/store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.prototype.$http = axios

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
