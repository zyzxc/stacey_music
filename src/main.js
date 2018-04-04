import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'

import 'common/stylus/index.styl'

FastClick.attach(document.body)

new Vue({
  el: "#app",
  render: h => h(App),
  router
})

