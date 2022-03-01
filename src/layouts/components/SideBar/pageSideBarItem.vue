<template>
  <template v-for="(route, index) in routes">
    <el-sub-menu
      :key="index"
      v-if="route.children.length > 0"
      :index="route.path">
      <template #title>
        <i :class="route.icon || ''"></i>
        <span>{{ route.name }}</span>
      </template>
      <el-menu-item-group>
        <pageSideBarItem
          :routes="route.children"
        ></pageSideBarItem>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item
      :key="index"
      v-if="showMenuItem(route)"
      :index="route.path">
      <i :class="route.icon || ''"></i>
      <template #title>
        <span>{{ route.name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
export default defineComponent({
  name: '',
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
