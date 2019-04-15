import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './common/styles/index.scss'
import ElementUI from 'element-ui'
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading1.gif'
import loading2 from './common/images/loading.gif'
// 手动引入 ECharts 各模块来减小打包体积
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // loading,
  adapter: {
    loading ({ el }) {
      const className = el.className
      if (className.indexOf('img1') !== -1) {
        el.src = loading2
      } else if (className.indexOf('img_content_other_banner') !== -1) {
        el.src = loading2
      } else if (className.indexOf('img_content_area_banner') !== -1) {
        el.src = loading2
      } else {
        el.src = loading
      }
    }
  }
})
Vue.component('v-chart', ECharts)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
