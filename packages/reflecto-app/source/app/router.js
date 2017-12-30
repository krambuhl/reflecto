import Vue from 'vue'
import Router from 'vue-router'

import AppContainer from '@components/AppContainer'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    name: 'example',
    path: '*',
    component: AppContainer,
    beforeRouteEnter (to, from, next) {
      console.log(router)
    }
  }],
  linkActiveClass: 'is-active-route'
})

export default router
