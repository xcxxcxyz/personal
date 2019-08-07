<template>
  <div>
    <div class="Movie" v-for="item in dataList" :key="item.id">
      <div id="pic">
        <img
          :src="'https://images.weserv.nl/?url='+item.cover.url"/>
      </div>
      <div id="word">
        <span class="name" v-for="item2 in item.title" :key="item2.name">{{item2}}</span>
        <br />
        <span class="person" v-for="item3 in item.actors" :key="item3.person">{{item3}}/</span>
        <br />
        <span class="date" v-for="item4 in item.year" :key="item4.year">{{item4}}</span>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {

  name: "Movie",
  data() {
    return {
	  dataList: [],
	  start:0,
    };
  },
  created() {
	this.getData();
	this.listenScroll();
   let obj2={
     title:"电影",
     Classname:"movie"
   }
   this.$emit('changNav',obj2)
  },
  methods: {
    getData() {
      if (this.dataList.length != this.total) {
        let axurl = `https://bird.ioliu.cn/v2?url=`;
        let urlapi = `https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=`+this.start+`&count=10`;
        axios.get(axurl + urlapi).then(res => {
          this.total = res.data.total;
          this.dataList = this.dataList.concat(
            res.data.subject_collection_items
          );
        });
      }
	},
    // listenScroll() {
		listenScroll(){
			let ele =document.documentElement;
			window.onscroll=()=>{
				let cHeight=ele.clientHeight;
				let sHeight =ele.scrollHeight;
				let sTop =ele.scrollTop;
				console.log(cHeight,sHeight,sTop);
				if(cHeight+sTop==sHeight){
					this.start+=10;
				this.getData();
				}	
			}
		}
    //   let ele = document.documentElement;
    //   window.onscroll = () => {
    //     let cHeight = ele.clientHeight;
    //     let sHeight = ele.scrollHeight;
    //     let sTop = ele.scrollTop;
	// 	console.log(cHeight, sHeight, sTop);
	// 	if(cHeight+sTop==sHeight){
	// 	this.start+=10;
	// 	this.getData();
	// }
	// }
	// }
	}
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#pic {
  width: 40%;
  margin-left: 30px;
  float: left;
}
.Movie {
  width: 100%;
  margin: 30px auto;
  height: 200px;
  line-height: 25px;
  border-bottom: 1px solid black;
}
.word {
  float: right;
  /* margin-left: 40px; */
}
.name {
  font-size: 0.3rem;
}
.person {
  font-size: 0.25rem;
}
.date {
  font-size: 0.25rem;
}
#pic img {
  width: 100px;
  height: 150px;
}
</style>
