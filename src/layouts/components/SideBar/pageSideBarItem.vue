<template lang="pug">
template(v-for="(route, index) in routes")
  el-sub-menu(
    :key="index"
    :index="route.path"
    v-if="route.children.length > 0"
  )
    template(#title)
      i(:class="route.icon || ''")
      span {{route.name}}
    el-menu-item-group
      page-side-bar-item(:routes="route.children")

  el-menu-item(
    :key="index"
    :index="route.path"
    v-if="showMenuItem(route)"
  )
    i(:class="route.icon || ''")
    template(#title)
      span {{ route.name }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageSideBarItem',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    return {}
  },
  computed: {
    showMenuItem () {
      return (route: any) => {
        return !route.hidden && route.children.length <= 0
      }
    }
  }
})
</script>
