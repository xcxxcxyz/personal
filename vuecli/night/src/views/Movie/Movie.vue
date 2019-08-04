<template>
  <div class="Movie">
	  <div id="pic">
    <img src="https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2563780504.jpg" alt="0">
	</div>
	<div id="word">
	<span class="name">哪吒之魔童降世</span><br/>
	<span class="person">吕艳婷/囧森瑟夫/瀚墨</span><br/>
	<span class="date">2019年</span>
	</div>
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
        console.log(res.data.subject_collection_items);
      });
    }
  },
  data() {
    return {
      dateList: [

	  ]
    };
  },
  name: "Movie",
  components: {}
};
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	#pic{
		width: 40%;
		margin-left: 30px;
		float: left;
	}
	.Movie{
		width: 100%;
		margin: 30px auto;
		height: 200px;
		line-height: 25px;
		border-bottom: 1px solid black;
	}
	.word{
		float: right;
		/* margin-left: 40px; */
	}
	.name{
		font-size: .3rem;
	}
	.person{
		font-size: .25rem;
	}
	.date{
		font-size: .25rem;
	}
	#pic img{
		width: 100px;
		height: 150px;	
	}
</style>
