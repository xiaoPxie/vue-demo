import Vue from 'vue'
import App from './App'
import router from './router'

// 引入重置样式
// @ 表示 <projectRoot>/src，只能用于模板中
import '@/assets/css/common/reset.css'
// 引入mock接口模拟
import '@/mock/mock.js'
// 引入过滤器
import '@/filter/filter.js'
// 引入swiper轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// 懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/static/images/loading.gif',
  attempt: 1
})
//cookie插件
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// 解决跨域
// 设置baseUrl
import axios from 'axios'
axios.defaults.baseURL = '/api'  //关键代码

//
Vue.config.productionTip = false

// 主组件实例化
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
