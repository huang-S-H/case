import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'
import News from '../components/News'
import Msgs from '../components/Msgs'
import Detailmsg from '../components/Detailmsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',
          component: News
        },
        {
          path: '/home/msgs',
          component: Msgs,
          children: [
            {
              path: '/home/msgs/detail/:id',
              component: Detailmsg
            }
          ]
        }
      ]
    }
  ]

})
