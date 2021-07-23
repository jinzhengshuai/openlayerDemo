import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'demo',
    component: function () {
      return import('/src/components/Demo')
    }
  }
]


export default new Router({
  mode: 'history',
  routes: constantRouterMap
});
