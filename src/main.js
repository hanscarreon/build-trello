import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import draggable from 'vuedraggable'
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  draggable,
  render: h => h(App)
}).$mount('#app')
