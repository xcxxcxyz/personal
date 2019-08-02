<template>
  <div id="app">
    <div  id="nav">
      <router-link to="/movie">电影</router-link> 
      <router-link to="/music">音乐</router-link> 
      <router-link to="/book">书籍</router-link> 
      <router-link to="/talk">聊天</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav{
    font-size: 0.7rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.3rem;
    color: aliceblue;
    background-color: rgb(33, 150, 243);
    }
</style>
