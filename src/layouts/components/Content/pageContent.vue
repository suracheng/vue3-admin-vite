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
import { useRouter } from 'vue-router'
import { useStore } from '@/stores'

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
