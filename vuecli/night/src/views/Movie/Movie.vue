<template>
  <div class="Movie">
    <h1>电影</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  created() {
	this.getData();
  },
  methods: {
    getData() {
      let axurl = `https://bird.ioliu.cn/v2?url=`;
      let urlapi = `https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=10`;
      axios.get(axurl + urlapi).then(res => {
        console.log(res);
      });
    }
  },
  data() {
    return {
      dataList: []
    };
  },
  name: "Movie",
  components: {}
};
</script>
