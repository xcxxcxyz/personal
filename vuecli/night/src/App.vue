<template>
  <div id="app">
   <navgation></navgation>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
<script>
import navgation from './components/navgation.vue'
export default {
  components:{
    navgation
  }
}
</script>