<template>
    <div id="app" :class="activeClass">
        <div  id="nav">
            <ul >
                <li @click="Oclick(item)"   v-for="(item,index)  in arr" :key="index">{{item.name}}</li>
            </ul>
        </div>
        <div id="foot">
            <p>首页</p><span>{{activeName}}</span>
        </div>
    </div>
</template>
<script>
export default { 
    
    data() {
        return {
            activeClass: "movie",
            activeName:"音乐",
            arr:[
            {
                name:"电影",
                path:'/Movie',
                activeClass:"movie",
            },
            {
                name:"音乐",
                path:'/Music',
                activeClass:"music",
            },
            {
                name:"书籍",
                path:'/Book',
                activeClass:"book",
            },
            {
                name:"聊天",
                path:'/Talk',
                activeClass:"talk",
            },
            ]
        }
    },
    methods: {
        Oclick(obj){
            this.$router.push(obj.path)
            this.activeClass= obj.activeClass;
            this.activeName = obj.name;
            }
    },
}
</script>
<style scoped>
.movie #foot,.movie #nav{
    background-color: rgb(33, 150, 243);
}
.music #foot,.music #nav{
    background-color: rgb(0, 150, 136);
}
.book #foot,.book #nav{
    background-color:  rgb(121, 85, 72);
}
.talk #foot,.talk #nav{
    background-color: rgb(63, 81, 181);
}
#nav{
    position:fixed;
    bottom: 0; 
    width: 100%;
    height: 1rem;
    background-color: rgb(33, 150, 243);
}
#nav ul{
    display: flex;
    text-align: center;
    line-height: 1rem;
    list-style: none;
}
#nav li{
    flex-grow: 1;
    font-size: 0.5rem;
    color: aliceblue;
}
#foot {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgb(33, 150, 243);
    height: 1rem;
    text-align: center;
    position: relative;
    color: aliceblue;
}
#foot p{
    font-size: .3rem;
    position:absolute;
    line-height: 1rem;
}
#foot span{
    position: fixed;
    margin-left: -25px;
    font-size: .5rem;
    line-height: 1rem;
}
</style>
