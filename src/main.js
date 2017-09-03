// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import 'lib-flexible'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
	preLoad: 1.3,
	// error: 'dist/error.png',
	// loading: 'dist/loading.gif',
	attempt: 1
  })
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
