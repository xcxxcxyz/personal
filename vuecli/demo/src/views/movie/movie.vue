<template>
  <div class="movie">
      <h1>这是电影</h1>
    <Democss></Democss>
  </div>
</template>

<script>
import Democss from'../../components/democss.vue'
// @ is an alias to /src
export default {
  name: 'movie',
  components: {
  Democss
  }
}
</script>
