<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link  to="/connect">Connect</router-link>|
      <button @click="isclick">点击</button>|
       <router-link  to="/text3">text3</router-link>|
    </div>
    <!-- 页面渲染之后在哪出现 -->
   <div class="pos">
     <transition name="fadea">
        <router-view/>
   </transition>
  </div> 
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pos{
  position: relative;
}
    .fadea-enter{
        transform: translateX(-100%)
    }
    .fadea-enter-active{
        transition: all 1s ease;
        position: absolute;
        top: 0;
        width: 100%;
    }
    .fadea-enter-to{
      transform: translateX(0)
    }
    .fadea-leave{
      transform: translateX(0)    
      }
      .fadea-leave-active{
        transition: all 1s ease;
        position: absolute;
        top: 0;
        width: 100%;
    }
    .fadea-leave-to{
        transform: translateX(100%)
    }
</style>
<script>
export default {
  methods: {
    isclick(){
      this.$router.push('/')
    }
  },
  
}
</script>