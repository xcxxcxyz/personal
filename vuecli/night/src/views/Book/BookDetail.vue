<template>
  <div v-if="bookInfo.title">
    {{bookInfo.title}}
    <div>
      <img :src="bookInfo.img" alt srcset />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookInfo: {}
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.getData(this.$route.params.id);
  },
  methods: {
    getData(id) {
      let bookdetailurl = "https://bird.ioliu.cn/v2?url=";
      let bookdetailapi =
        "https://m.douban.com/rexxar/api/v2/market/book/?id=" + id;
      axios.get(bookdetailurl + bookdetailapi).then(res => {
        console.log(res);
      });
    }
  }
};
</script>