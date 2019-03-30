import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './common/styles/index.scss'
import { Button, Select } from 'element-ui'
Vue.use(Select)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
