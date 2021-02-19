import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/app.scss'
import store from '@/store/index'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App),
})
app.$mount('#app')
