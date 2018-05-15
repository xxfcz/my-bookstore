<template>
  <div>
    <section>
      <!-- 热门推荐 -->
      <!-- 快讯 -->
      {{announcement}}
    </section>
    <section>
      <book-list :books="latestUpdated" heading="最近更新">
        </book-list>
      </book-list>
    </section>
    <section>
      <!-- 编辑推荐 -->
    </section>
  </div>
</template>

<script>
import BookList from "./components/BookList.vue"

export default {
  data() {
    return {
      announcement: "今日上架的图书全部8折",
      slides: [{ id: 1 }, { id: 2 }],
      latestUpdated: [
        {
          id: 1,
          title: "揭开数据真相: 从小臼到数据分析达人",
          authors: ["E Z", "D Z"],
          img_url: "/static/img/cover/1.svg"
        },
        {
          id: 2,
          title: "Android 高级进阶",
          authors: ["顾浩鑫"],
          img_url: "/static/img/cover/2.svg"
        }
      ]
    };
  },
  components: {BookList},
};
</script>
