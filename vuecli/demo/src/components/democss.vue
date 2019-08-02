<template>
    <div id="app">
        <div class="nav">
            <span id="nav-left">首页</span>
            <span id="nav-right">电影</span>
        </div>
        <div class="foot">

        </div>  
    </div>
</template>
<style >
*{
    margin: 0;
    padding: 0;
}
.nav{
    position: fixed;
    top: 0;
    width: 100%;
    height: 1rem;
    background-color: rgb(33, 150, 243);
    color: aliceblue;
}
#nav-left{
    margin-left: 10px;
    font-size: 0.3rem;
    position: absolute;
    top: 30%;
}
#nav-right{
    position: absolute;
    left:35%;
    font-size: 0.7rem;
}

</style>
<script>
export default {
    
}
</script>