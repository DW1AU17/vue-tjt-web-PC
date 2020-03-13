import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ViewUI from 'view-design'   
import 'view-design/dist/styles/iview.css'
import '@/assets/styles/base.less'

Vue.use(ViewUI)  // 整个引入

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


// import { Button } from 'view-design'  // 按需引入
// Vue.component('Button', Button);  // 按需引入
