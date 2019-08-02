import Vue from 'vue'
import Router from 'vue-router'
import movie from './views/movie/movie.vue'
import music from './views/music/music.vue'
import book from './views/book/book.vue'
import talk from './views/talk/talk.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/talk',
      name: 'talk',
      component: talk
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
