<template>
  <div class="book">
      <h1>这是book</h1>
    <Democss></Democss>
  </div>
</template>

<script>
import Democss from'../../components/democss.vue'
// @ is an alias to /src
export default {
  name: 'book',
  components: {
  Democss
  }
}
</script>
