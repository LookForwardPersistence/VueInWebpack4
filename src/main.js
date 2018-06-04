import Vue from 'vue'
import App from './App'

import router from './router/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
  // render: h => h(App)
})
