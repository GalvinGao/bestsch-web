import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import Buefy from 'buefy'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

Vue.use(Buefy)
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
