import Vue from 'vue'
import Router from 'vue-router'
import listaOS from './views/listaOS.vue'
import cadastrarOS from './views/cadastrarOS.vue'
import imprimir from  './views/imprimir.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'listaOS',
      component: listaOS
    },
    {
      path: '/cadastrarOS',
      name: 'cadastrarOS',
      component: cadastrarOS,
    },
    {
      path: '/cadastrarOS/:id',
      name: 'cadastrarOS',
      component: cadastrarOS,
    },
    {
      path: '/imprimir/:id',
      name: 'imprimir',
      component: imprimir
    },

  ]
})
