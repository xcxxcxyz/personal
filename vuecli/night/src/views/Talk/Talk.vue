<template>
  <div class="Talk" >
    <div class="talk-text">
      <div class="talk-list" v-for="item in talkList" :key="item.answer">

<!-- Right -->
<div class="receiver">
<div>
<img src="../../assets/img/machine.jpg" />
</div>
<div>
<div class="right_triangle"></div>
<span>{{item.question}}</span>
</div>
</div>
<!-- Left -->
<div class="sender">
<div>
<img src="../../assets/img/mine.jpg" />
</div>
<div>
<div class="left_triangle"></div>
<span>{{item.answer}}</span>
</div>
</div>
      </div>
    </div>
    <div class="talk-form">
      <input type="text" v-model="tInfo" />
      <button @click="send">send</button>
    </div>
  </div>
</template>
<style scoped>
* {
  font-size: 20px;
}
.left_triangle {
  height: 0px;
  width: 0px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent aquamarine transparent transparent;
  position: relative;
  left: -16px;
  top: 3px;
}

.right_triangle {
  height: 0px;
  width: 0px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent transparent gold;
  position: relative;
  right: -16px;
  top: 3px;
}
#nav {
  z-index: 10000;
}
.sender::after{
content: "";
display: block;
clear:both;
}
.sender div:nth-of-type(1){
float: left;
}
.sender div:nth-of-type(2){
background-color: aquamarine;
float: left;
margin: 0 20px 10px 15px;
padding: 10px 10px 10px 0px;
border-radius:7px;
width: 230px;
}

.receiver div:first-child img,
.sender div:first-child img{
width:50px;
height: 50px;
border-radius: 100%;
}

.receiver::after{
content: "";
display: block;
clear:both;
}
.receiver div:nth-child(1){
float: right;
}
.receiver div:nth-of-type(2){
float:right;
background-color: gold;
margin: 0 10px 10px 20px;
padding: 10px 0px 10px 10px;
border-radius:7px;
width: 230px;
}

.left_triangle{
height:0px; 
width:0px; 
border-width:8px; 
border-style:solid; 
border-color:transparent aquamarine transparent transparent; 
position: relative;
left:-16px;
top:3px;
}
.right_triangle{
height:0px; 
width:0px; 
border-width:8px; 
border-style:solid; 
border-color:transparent transparent transparent gold; 
position: relative;
right:-16px;
top:3px;

}

.talk-text {
  width: 100%;
  background-size: 100%;
  color: red;
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  bottom: 1rem;
  overflow-y:scroll 
}
.talk-form {
  position: fixed;
  bottom: 53px;
  width: 100%;
  border: 1px solid black;
}
.talk-form input {
  height: 30px;
  width: 77.9%;
}
.talk-form button {
  height: 34px;
  width: 20.55%;
  border-left: 1px solid black;
}
</style>
<script>
import md5 from "blueimp-md5";
var timestamp = Date.parse(new Date()) / 1000;
var noncestr = Math.random()
  .toString(36)
  .slice(2);
// console.log(noncestr);
export default {
  data() {
    return {
      talkList: [],
      tInfo: ""
    };
  },
  methods: {
    send() {
      let talkurl = `https://bird.ioliu.cn/v2?url=`;
      let talkapi = `https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat`;
      let appkey = "6kj7ZqEKUVm5wE8g";
      let params = {
        app_id: "2119538646",
        nonce_str: noncestr,
        question: this.tInfo,
        session: "10000",
        time_stamp: timestamp
      };
      params.sign = this.getSign(params);
      console.log(params);
      axios
        .get(talkurl + talkapi, {
          params
        })
        .then(res => {
          console.log(res);
          this.talkList.push({
            question: this.tInfo,
            answer: res.data.data.answer
          });
        });
    },

    getSign(params) {
      //第一步对象的key值进行字典排序
      let arr = Object.keys(params).sort();
      //第二步 对排序后的对象进行url转码
      let str = "";
      for (let i = 0; i < arr.length; i++) {
        str += arr[i] + "=" + encodeURI(params[arr[i]]) + "&";
      }
      //拼接appkey
      str += "app_key=6kj7ZqEKUVm5wE8g";
      //md5加密
      str = md5(str)
        .toString()
        .toUpperCase();
      return str;
    }
  },
  created() {
    let obj4 = {
      title: "聊天",
      Classname: "talk"
    };
    this.$emit("changNav", obj4);
  },
  name: "Talk",
  components: {}
};
</script>
