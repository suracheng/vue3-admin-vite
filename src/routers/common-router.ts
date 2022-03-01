import { SRouter } from './router-interface'
import layout from '@/layouts/layout.vue'

// 动态加载页面
function loadPage (page : string) {
  // 兼容首字符带 / 的路由
  page = page.charAt(0) === '/' ? page.slice(1) : page
  // TODO 这里的打包chunk最好写一下，便于调试线上代码
  return layout
  // return () => import(/* webpackChunkName: "common" */ `@/pages/${page}.vue`)
}

// 公共路由，不需要dashboard
export const common : Array<SRouter> = [
  {
    path: '/',
    component: layout,
    hidden: false,
    name: '首页',
    icon: 'el-icon-s-home',
    children: []
  },
  {
    path: '/login',
    component: loadPage('login/login'),
    hidden: true, // 是否隐藏
    name: '登录',
    icon: '',
    children: []
  },
  {
    path: '/about',
    component: loadPage('about'),
    hidden: false, // 是否隐藏
    name: '关于',
    icon: 'el-icon-s-home',
    children: []
  },
  {
    path: '/error',
    // component: () => import(/* webpackChunkName: "common" */ '@/layouts/error.vue'),
    hidden: true, // 是否隐藏
    name: '404',
    icon: '',
    children: []
  }
]

export default {
  common
}
