// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Dexie from 'dexie'

// let db = new Dexie('test')
// db.version(1).stores(
//   { tests: 'id, title, created_at, updated_at' },
//   { posts: 'id, owner' }
// );
// db.open();
// db.posts.put({id:2, owner: 'bbc'});

// Define your database
//
var db = new Dexie('FriendsAndPetsDB')

db.version(1).stores({
  friends: '++id,name,isCloseFriend',
  pets: '++id,name,kind'
})

db.version(2).stores({ friends: '++id,name,shoeSize' })
db.version(3).upgrade(function(t) {
  return t.friends.toCollection().modify(function(friend) {
    // Modify each friend:
    if (typeof friend.shoeSize === 'undefined') {
      friend.shoeSize = friend.isCloseFriend ? 37 : 39
      delete friend.isCloseFriend
    }
  })
})
db.version(4).stores({
  friends: '++id,name'
})

Vue.prototype.$db = db;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
