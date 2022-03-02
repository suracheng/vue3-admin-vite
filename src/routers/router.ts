import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// devRoute是显示在本地导航的，也可以本地和线上使用一致
export let devRouteMap : Array<RouteRecordRaw> = []

// 加载本地路由文件
const modulesFiles = import.meta.globEager('./*-router.ts'); // 从文件系统中导入

// 拿到路由文件配置列表
for (const path in modulesFiles) {
  const [ [ key, list ] ]: any = Object.entries(modulesFiles[path].default)

  devRouteMap = devRouteMap.concat(list);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 添加 baseUrl， 创建web历史记录
  routes: devRouteMap // 路由列表
})

export default router
