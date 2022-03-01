<template lang="pug">
div.main
  router-view
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  getCurrentInstance,
  onMounted
} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: '',
  setup () {
    const store = useStore()
    const router = useRouter()
    const instance = getCurrentInstance()
    onMounted(() => {
      console.log('onMounted', store, router, instance)
    })
    return {}
  }
})
</script>

<style lang="stylus" scoped>
.page-content
  background #fff
</style>
