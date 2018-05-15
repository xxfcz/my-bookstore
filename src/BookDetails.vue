<template>
  <div>
    图书详情页，book id={{bookId}}
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      bookId: this.$route.params.id
    }
  },
  created(){
    const bookId = this.$route.params.id;
    console.log(bookId);
  }
}
</script>
