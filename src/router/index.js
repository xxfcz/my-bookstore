import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/pages/Main'
import Home from '@/pages/Home'
import Categories from '@/pages/Categories'
import Me from '@/pages/Me'
import ShoppingCart from '@/pages/ShoppingCart'
import BookDetails from '@/pages/BookDetails'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  base: __dirname,
  linkActiveClass: "active",
  routes: [
    {
      name: 'Main',
      path: '/',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'categories',
          name: 'Categories',
          component: Categories
        },
        {
          path: 'shopping-cart',
          name: 'ShoppingCart',
          component: ShoppingCart
        },
        {
          path: 'me',
          name: 'Me',
          component: Me
        }    
      ]
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/books/:id',
      name: 'BookDetails',
      component: BookDetails
    }
  ]
})
