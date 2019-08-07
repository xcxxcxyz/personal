<template>
  <div id="bookapp">
    <swiper :options="swiperOption">
      <swiper-slide id="inner" v-for="item in bookList" :key="item.id">
        <img
          :src="'https://images.weserv.nl/?url='+item.cover.url"
          alt
          @click="chooseBook(item.id)"
        />
        <p>{{item.title}}</p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<style scoped>
#bookapp {
  width: 100%;
}
#inner {
  height: 250px;
}
#inner img {
  width: 100px;
  height: 150px;
  margin-top: 20px;
}
#inner p {
  font-size: 0.2rem;
  text-align: center;
  margin-top: -5px;
}
</style>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  created() {
    this.getData();
  },
  methods: {
    chooseBook(id) {
      this.$router.push({
        name: "bookdetail",
        params: {
          id
        }
      });
      let chooseurl = `https://bird.ioliu.cn/v2?url=`;
      let chooseapi =
        `https://m.douban.com/rexxar/api/v2/market/book/?id=` + id;
      axios.get(chooseurl + chooseapi).then(res => {
        console.log(res);
      });
    },
    getData() {
      let bookurl = `https://bird.ioliu.cn/v2?url=`;
      let bookapi = `https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=20`;
      axios.get(bookurl + bookapi).then(res => {
        console.log(res.data.subject_collection_items);
        this.bookList = res.data.subject_collection_items;
      });
    }
  },
  data() {
    return {
      bookList: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        components: {
          swiper,
          swiperSlide
        }
      }
    };
  }
};
</script>
