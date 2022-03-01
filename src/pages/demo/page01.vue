<template lang="pug">
div 测试page01
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
export default defineComponent({
  name: 'Page01',
  setup () {
    return {}
  },
  created () {
    this.test()
  },
  methods: {
    test () {
      // console.log(this.$vmathAdd(1, 2))
      // console.log(this.$axios)
      console.log('执行了吗--')
    }
  }
})
</script>
