import Vue from 'vue'
import App from './App.vue'
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment'
Vue.prototype.$moment = moment

Vue.use(ElementUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
