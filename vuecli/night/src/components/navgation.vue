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
    background-color: rgb(109, 125, 83);
}
.music #foot,.music #nav{
    background-color: rgb(224, 170, 0);
}
.book #foot,.book #nav{
    background-color:  rgb(0, 186, 137);
}
.talk #foot,.talk #nav{
    background-color: rgb(223,179,215);
}

#nav{
    position:fixed;
    bottom: 0; 
    width: 100%;
    height: 1rem;
    background-color: rgb(33, 150, 243);
    z-index: 10000;
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
    color: aliceblue;
    line-height: .6rem;
    z-index: 10000;
}
#foot p{
    position: absolute;
    margin-left: 10px;
    font-size: .3rem;
    line-height: 1rem;
}
#foot span{
    font-size: .5rem;
    line-height: 1rem;
    
}
</style>
