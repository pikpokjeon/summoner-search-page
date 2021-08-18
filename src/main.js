import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { store } from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuex)


new Vue({
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
