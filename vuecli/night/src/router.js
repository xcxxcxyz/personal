import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie/Movie.vue'
import Book from './views/Book/Book.vue'
import Talk from './views/Talk/Talk.vue'
import Music from './views/Music/Music.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book,
    },
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/Talk',
      name: 'Talk',
      component: Talk
    },
    {
      path:"/book/detail",
      name:"bookdetail",
      component:()=>import("./views/Book/BookDetail.vue")
    }
  ]
})
