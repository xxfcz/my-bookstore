import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/Main'
import Home from '@/Home'
import Categories from '@/Categories'
import Me from '@/Me'
import ShoppingCart from '@/ShoppingCart'
import BookDetails from '@/BookDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
