<template>
  <div class="Music">
    <aplayer :audio="audio" :lrcType="0" />
    <table class="tform">
      <thead>
        <tr id="cross">
          <th></th>
          <th>歌曲名称</th>
          <th>歌手</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="chooseSong(item.id)" v-for="(item,index) in dataList" :key="(item,index)" id="vertical">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.ar[0].name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
* {
  font-size: 0.25rem;
}
.tform {
  width: 100%;
}
#vertical {
  text-align: center;
}
.tform tbody tr:nth-child(odd) {
  background-color: rgb(214, 218, 217);
}
</style>
<script>
export default {
  methods: {
    chooseSong(id) {
      let thisUrl = "https://bird.ioliu.cn/netease/song?id=" + id;
      console.log(id)
      axios.get(thisUrl).then(res => {
        console.log(res);
        let obj = {
              name: res.data.data.name,
              artist: res.data.data.ar[0].name,
              url: res.data.data.mp3.url,
              cover: res.data.data.al.picUrl // prettier-ignore
        };
        this.audio=obj
      });
    },
    getData() {
      let songurl = `https://bird.ioliu.cn/netease/playlist?id=739179183`;
      axios.get(songurl).then(res => {
        console.log(res.data.playlist.tracks);
        this.dataList = res.data.playlist.tracks;
      });
    }
  },
  created() {
    let obj3 = {
      title: "音乐",
      Classname: "music"
    };
    this.$emit("changNav", obj3);
    this.getData();
  },
  data() {
    return {
      dataList: [],
       audio: {
          name: '东西（Cover：林俊呈）',
          artist: '纳豆',
          url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
          cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
          lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
        },
    };
  }
};
</script>