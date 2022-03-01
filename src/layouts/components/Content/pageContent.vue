<template lang="pug">
div.main
  router-view
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  getCurrentInstance,
} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: '',
  setup () {
    const store = useStore()
    const router = useRouter()
    const instance = getCurrentInstance()

    return {}
  }
})
</script>

<style lang="stylus" scoped>
.page-content
  background #fff
</style>
