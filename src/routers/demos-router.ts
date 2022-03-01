import { SRouter } from './router-interface'
import layout from '@/layouts/layout.vue'
function loadPage (page : string) {
  // 兼容首字符
  page = page.charAt(0) === '/' ? page.slice(1) : page
  // TODO 这里的打包chunk最好写一下，便于调试线上代码
  return () => import(`../pages/${page}.vue`)
}

export const demos : Array<SRouter> = [
  {
    path: '/demo',
    name: '案例',
    icon: 'el-icon-s-home',
    meta: {
      system: 'demo'
    },
    component: layout,
    children: [
      {
        path: '/demo/page01',
        component: loadPage('demo/page01'),
        // hidden: false, // 是否隐藏
        name: '数字操作',
        icon: 'el-icon-s-home',
        children: []
      },
      {
        path: '/demo/template',
        component: loadPage('demo/template'),
        hidden: false, // 是否隐藏
        name: 'vue3-template',
        icon: 'el-icon-s-home',
        children: [
          {
            path: '/demo/template',
            component: loadPage('demo/template'),
            hidden: false, // 是否隐藏
            name: '演示多级路由',
            icon: 'el-icon-s-home',
            children: []
          }
        ]
      }
    ]
  }
]

export default {
  demos
}
