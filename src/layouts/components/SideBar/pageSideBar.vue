<template lang="pug">
div.menu-list
  .logo(v-if='false')
    img(:src="logo")
  .route-menu
    el-menu(
      class='menu'
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
      :default-active="showActive"
      :unique-opened='true'
      :default-openeds = "openeds"
      :collapse="navCollapse"
    )
      page-side-bar-item(:routes="routeMap")
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  computed
} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { devRouteMap } from '@/routers/router'
import PageSideBarItem from './pageSideBarItem.vue'

export default defineComponent({
  name: 'PageSideBar',
  components: {
    PageSideBarItem
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const logo = ref(store.state.logo)
    const useDevRoute = ref(store.state.useDevRoute)
    const routeMap = ref(devRouteMap)
    if (useDevRoute.value) {
      console.log('这里使用线上请求回来的路由')
      // routeMap = 线上路由，但是结构必须一致
    }
    const navCollapse = computed<boolean>(() => {
      return store.state.baseStore.control.navCollapse
    })
    const showActive = ref('') // 记录当前打开菜单id
    const openeds = ref<Array<string>>([])
    function handleSelect (index : string, indexPath: Array<string>) {
      console.log('handleSelect', index, indexPath)
      router.push({
        path: index
      })
    }
    function handleOpen (index : string, indexPath: Array<string>) {
      console.log('handleOpen', index, indexPath)
    }
    function handleClose (index : string, indexPath: Array<string>) {
      console.log('handleClose', index, indexPath)
    }
    return {
      logo,
      useDevRoute,
      routeMap,
      showActive,
      openeds,
      handleSelect,
      handleOpen,
      handleClose,
      navCollapse
    }
  }
})
</script>

<style lang="stylus" scoped>
.menu-list
  .logo
    margin 10px 10px
    line-height 50px
    height 50px
    display flex
    cursor pointer
</style>

<style lang="stylus">
.route-menu
  .el-menu
    background-color #304156 !important
    border-right none
  .el-menu-item,
  .el-menu-item i
    color #fff !important
  .el-sub-menu__title,
  .el-sub-menu__title i
  .el-sub-menu__title span
    color #fff !important
  .el-sub-menu__title,
  .el-menu-item
    &:hover
      background-color #263445
</style>
