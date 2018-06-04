import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('../components/HelloWorld.vue')), 'home');
const home2 = r => require.ensure([], () => r(require('../components/Hello.vue')), 'home2');
const detail = r => require.ensure([], () => r(require('../components/Detail.vue')),'detail');
const order = r => require.ensure([], () => r(require('../components/orderList.vue')),'order');
Vue.use(Router)

export default  new Router({
  routes:[
    {
      path: '/',
      name: '/home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
       path: '/home2',
      name: "home2",
      component: home2,
      children: [
        {
          path: '/',
          component:detail,
          meta: ["首页", "明细"]
        },

        {
          path: '/detail',
          component:detail,
          meta: ["首页", "明细"]
        },
        {
         path: '/order',
          component: order,
          meta: ["首页","新增订单"]
        }
      ]
    }
  ]
})
