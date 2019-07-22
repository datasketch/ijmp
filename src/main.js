import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
  data () {
    return {
      $baseURL: 'https://script.google.com/macros/s/AKfycbxIuwiI9uhVrz_ZXgdWRZ4KgyruB73ul4mPz7PY6EOJRYjEa_KZ/exec'
    }
  }
})

Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
