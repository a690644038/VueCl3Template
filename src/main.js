import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/common.less'
import MetaInfo from 'vue-meta-info'
import VueLazyload from 'vue-lazyload'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css'; /* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
import './plugin/rem.js'
import axios from "axios";
// import 'vant/lib/index.css'
// import Vant from 'vant'
// import './registerServiceWorker'
// Vue.use(Vant)
Vue.use(YDUI);
Vue.use(VueLazyload)
Vue.use(MetaInfo)
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
