<template>
   <!-- <el-button type="primary">Vite</el-button>
  <div class="container">
    <h1>Hello Vite.js</h1>
  </div> -->
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

$color: red;
.container {
  h1 {
    color: $color;
  }
}
</style>
