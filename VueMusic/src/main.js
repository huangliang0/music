// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//主入口文件

import Vue from 'vue'
import App from './App'
import router from './router'
//网络请求安装包axios---->npm install --save axios
//引入axios
import Axios from "axios"
//挂载Axios
Vue.prototype.$axios  = Axios;
//地址入口
Vue.prototype.HOST = "/baidu_music_api"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
