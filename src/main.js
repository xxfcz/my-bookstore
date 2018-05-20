// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueIdb from "vue-idb"

Vue.use(VueIdb)
Vue.config.productionTip = false

const idb = new VueIdb({
  version: 1,
  database: 'test',
  schemas: [
    { tests: 'id, title, created_at, updated_at' },
    { posts: 'id, owner' }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  idb, idb,
  router,
  components: { App },
  template: '<App/>'
})
