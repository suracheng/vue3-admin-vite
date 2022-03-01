<template lang="pug">
div.page-header
  .title
    i(@click="toggleMenuCollpase"
      :class="navCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'")
    span.text {{title}}
  .right-info
    span {{userName}}
</template>

<script lang="ts">
import {
  defineComponent,
  computed
} from 'vue'
import { useRoute, RouteRecordName } from 'vue-router'
import { useStore } from 'vuex'
import * as BaseTypes from '@/stores/base-type'

export default defineComponent({
  name: 'PageHeader',
  setup () {
    const route = useRoute()
    const store = useStore()
    // 自动页面title
    const title = computed<RouteRecordName>(() => route.name || '')
    const userName = computed<string>(() => store.state.userStore.name)
    const navCollapse = computed<boolean>(() => store.state.baseStore.control.navCollapse)

    const toggleMenuCollpase = () => {
      store.commit('baseStore/' + BaseTypes.CONTROLL_NAV_COLLAPSE)
    }

    return {
      title,
      userName,
      navCollapse,
      toggleMenuCollpase
    }
  }
})
</script>

<style lang="stylus" scoped>
.page-header
  width 100%
  height 60px
  background #fff
  margin-bottom 12px
  padding 20px 0 0 20px
  box-sizing border-box
  flex-shrink 0
  color #999
  z-index 66
  border-bottom: 1px solid #eaecef
  display flex
  justify-content space-between
  .title
    color #999
    i
      cursor pointer
    .text
      margin-left 10px
  .right-info
    margin-right 30px
</style>
