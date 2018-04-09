import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

FastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

new Vue({
  el: "#app",
  render: h => h(App),
  store,
  router
})

