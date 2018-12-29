// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import qs from 'qs'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://www.wwtliu.com';
// Vue.filter('currency',function(value){
//   return '$'+value.toFixed(2)
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
