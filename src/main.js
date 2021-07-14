import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//页头
import MyHeader from './components/MyHeader'
Vue.component('my-header',MyHeader)
//内容
import content from './components/content'
Vue.component('co-ntent',content)
//底部
import MyFoot from './components/MyFoot'
Vue.component('my-foot',MyFoot)
//mintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
