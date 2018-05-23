<template>
  <div>
    <section>
      <!-- 热门推荐 -->
      <!-- 快讯 -->
      {{announcement}}
    </section>
    <section>
      <book-list :books="latestUpdated" heading="最近更新" @onBookSelect="onBookSelect($event)">
      </book-list>
    </section>
    <section>
      <!-- 编辑推荐 -->
    </section>
    <modal-dialog ref="dialog">
      <div slot="header">此处是 header 插棤的内容</div>
      <div>这个DIV将自动默认插槽的内容</div>
    </modal-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import BookList from '@/components/BookList.vue'
import ModalDialog from '@/components/Dialog.vue'

export default {
  data() {
    return {
      announcement: '',
      slides: [],
      latestUpdated: [],
      recommended: []
    }
  },
  methods: {
    onBookSelect(book) {
      console.dir(book)
      this.$refs.dialog.open()
    }
  },
  components: { BookList, ModalDialog },
  created() {
    console.log(this.$db)
    //this.$db.version(2).stores({ posts: 'id, owner, count' });
    // this.$db.posts.put({id:2, owner:'zzz'}).catch(function(err){
    //   console.warn(err);
    // });

    //
    // Put some data into it
    //
    this.$db.friends
      .put({
        name: 'bbc',
        shoeSize: 45
      })
      .then(key => {
        console.log('returns: ' + key)
        return this.$db.friends.where({ name: 'bbc' }).toArray()
      })
      .then(friends=> {
        console.log(friends)
        if (friends) alert('how many? ' + friends.length)
      })
      .catch(function(error) {
        alert('Ooops: ' + error)
      })

    axios.get('/api/home').then(
      res => {
        this.announcement = res.data.announcement
        this.slides = res.data.slides
        this.latestUpdated = res.data.latestUpdated
        this.recommended = res.data.recommended
      },
      err => {
        console.log(err)
      }
    )
  }
}
</script>
