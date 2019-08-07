<template>
  <div class="Talk">
        <div class="talk-text">
            <div class="talk-list" v-for="item in talkList" :key="item.answer">
                <div class="as">{{item.answer}}</div>
                <div class="qu">{{item.question}}</div>
            </div>
        </div>
    <div class="talk-form">
        <input type="text" v-model="tInfo">
        <button @click="send">send</button>
    </div>
  </div>
</template>
<style scoped>
*{
    font-size: 20px;
}
.talk-text{
    height: 520px;
    width: 100%;
    background-image: url("https://imgsa.baidu.com/forum/w%3D580/sign=e7e2bd2b14d8bc3ec60806c2b28ba6c8/1ce9ce1b9d16fdfa2432ceffb98f8c5494ee7b4f.jpg");
    background-size:375px 520px;
    color: aliceblue;
}
.talk-form{
    height: 30px;
    width: 100%;
    border: 1px solid black
    
}
.talk-form input{
    height:30px ;
    width: 78.9%;
}
.talk-form button{
    height: 35px;
    width: 20%;
    border-left: 1px solid black
}

</style>
<script>
import md5 from "blueimp-md5"
var timestamp =Date.parse(new Date())/1000;
var noncestr=Math.random().toString(36).slice(2)
// console.log(noncestr);
export default {
    data() {
        return {
            talkList:[],
            tInfo:''
        }
    },
  methods: {
    send() {
      let talkurl = `https://bird.ioliu.cn/v2?url=`;
      let talkapi = `https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat`;
      let appkey='6kj7ZqEKUVm5wE8g'
      let params ={
          app_id:'2119538646',
          nonce_str:noncestr,
          question:this.tInfo,
          session:'10000',
          time_stamp:timestamp,
      }
            params.sign = this.getSign(params);
            console.log(params);
                        axios.get(talkurl+talkapi,{
                params
            }).then((res)=>{
                console.log(res);
                this.talkList.push({
                     question:this.tInfo,
                     answer:res.data.data.answer,
                })
            })
        },
 
          getSign(params){
            //第一步对象的key值进行字典排序
            let arr = Object.keys(params).sort();
            //第二步 对排序后的对象进行url转码
            let str = ""
            for(let i = 0;i<arr.length;i++){
                str += arr[i]+"="+encodeURI(params[arr[i]])+"&"
            }
            //拼接appkey
            str+="app_key=6kj7ZqEKUVm5wE8g";
            //md5加密
            str = md5(str).toString().toUpperCase();
            return str
        }
         },
  created() {
    let obj4 = {
      title: "聊天",
      Classname: "talk"
    };
    this.$emit("changNav", obj4);
    this.send();
  },
  name: "Talk",
  components: {}
};
</script>
