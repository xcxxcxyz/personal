<template>
  <div id="app">
  <navgation ></navgation>
    <router-view />
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  padding: 1rem 0;
}
 .clearfix::after{
    content: "";
    display:block;
    clear: both;
  }
</style>
<script>
import navgation from './components/navgation.vue'
export default {
  methods: {
       thisActive(obj){
      this.initActive = obj;
    }
  },
  components:{
    navgation
  }
}
</script>