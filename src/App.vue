<template lang='pug'>
el-config-provider(:locale="locale")
  router-view

  //- el-button(type="primary") Vite
  //- div(class="container")
  //-   h1 Hello Vite.js
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 注入全局国际化配置
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup () {
    return {
      locale: zhCn,
    }
  }
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
