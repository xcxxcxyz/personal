import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      // beforeEnter (to, from, next) {
      //    console.log(to,from);
      // }
    },
    {
      path:'/connect',
      name:'Connect',
      component:() => import('./views/Connect.vue'),
      children:[
        {
          path:'/connect/text4',
          name:'text4',
          component:() => import('./views/text4')
        },
        {
          path:'/connect/text1',
          name:'text1',
          component:() => import('./views/text1'),
        },
       {
        path:'/connect/text2',
        name:'text2',
        component:() => import('./views/text2'),
        },
      ]
    },
    {
      path:'/text3',
      name:"text3",
      component:() => import('./views/text3')
    },
    {
      path:'/mine',
      redirect:'/'
    },
    {
      path:"*",
      component:() => import('./views/Error404.vue'),
    }
  ]
})
