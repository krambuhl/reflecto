import Vue from 'vue'
import * as ReflectoComponents from 'reflecto-ui'

import router from '@app/router'
import store from '@app/store'

import AppShell from '@components/AppShell'

const componentLibrary = {
  ...ReflectoComponents,
  ...global.__REFLECTO_COMPONENTS__
}

Object.keys(componentLibrary).forEach(key => {
  Vue.component(key, componentLibrary[key])
})

global.app = new Vue({
  el: '.root',
  router,
  store,
  render: h => h(AppShell)
})
