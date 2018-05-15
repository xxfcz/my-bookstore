<template>
  <div>
    <section>
      <!-- 热门推荐 -->
      <!-- 快讯 -->
      {{announcement}}
    </section>
    <section>
      <book-list :books="latestUpdated" heading="最近更新"
        @onBookSelect="onBookSelect($event)"
      >
        </book-list>
      </book-list>
    </section>
    <section>
      <!-- 编辑推荐 -->
    </section>
  </div>
</template>

<script>
import axios from "axios"
import BookList from "./components/BookList.vue"

export default {
  data() {
    return {
      announcement: "",
      slides: [],
      latestUpdated: [],
      recommended: []
    };
  },
  methods: {
    onBookSelect(book){
      console.dir(book);
    }
  },
  components: {BookList},
  created(){
    axios.get('/api/home').then(res => {
      this.announcement = res.data.announcement;
      this.slides = res.data.slides;
      this.latestUpdated = res.data.latestUpdated;
      this.recommended = res.data.recommended;
    }, err=>{
      console.log(err);
    });
  }
};
</script>
