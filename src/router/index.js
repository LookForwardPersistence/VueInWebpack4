import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('../components/HelloWorld.vue')), 'home');
const home2 = r => require.ensure([], () => r(require('../components/Hello.vue')), 'home2');
Vue.use(Router)

export default  new Router({
  routes:[
    {
      path: '/',
      name: '/home',
      component: home
    },
    {
       path: '/home2',
      name: "home2",
      component: home2
    }
  ]
})
