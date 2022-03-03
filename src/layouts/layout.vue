<template lang="pug">
div.layout-wrap
  .left-wrap(:style='getStyle')
    pageSideBar
  .right-wrap
    PageHeader
    PageContent
</template>

<script lang="ts">
import pageSideBar from './components/SideBar/pageSideBar.vue'
import PageHeader from './components/Header/pageHeader.vue'
import PageContent from './components/Content/pageContent.vue'

import {
  computed,
  defineComponent
} from 'vue'
// import { useStore } from 'vuex'
import { useStore } from '@/stores'
export default defineComponent({
  name: '',
  components: {
    pageSideBar,
    PageHeader,
    PageContent
  },
  setup () {
    interface styleObj {
      minWidth: string,
      backgroundColor: string
    }
    const store = useStore()
    const getStyle = computed<styleObj>(() => {
      return {
        minWidth: store.state.base.control.navCollapse ? '' : '240px',
        backgroundColor: '#304156'
      }
    })
    return {
      getStyle
    }
  }
})
</script>

<style lang="stylus" scoped>
.layout-wrap
  height 100vh
  display flex
  align-items stretch
  box-sizing border-box
  background-color #f4f4f4
  .left-wrap
    flex-shrink 0
    display flex
    flex-direction column
    background-color #fff
    border-right 1px solid #eaecef
  .right-wrap
    flex-grow: 1
    display flex
    flex-direction column
    background #f5f7f9
</style>
