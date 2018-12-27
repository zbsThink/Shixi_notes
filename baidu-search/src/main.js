// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'
import jsonp from 'jsonp'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.jsonp = jsonp
Vue.prototype.HOST = '/api'
/* eslint-disable no-new */
//在发送请求前对数据进行处理将x-www-form-urlencoded:{name:'zbs',age:18}格式=>form-data:?name='zbs'&age=18格式
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(config.method =='post'){
    config.data = qs.stringify(config.data)
  }
  //拦截是发生在then和catch之前的，从这个打印结果就可以看出
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
