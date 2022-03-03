import { createApp } from 'vue'

import App from './App.vue'
import router from './routers/router'
import store, { key } from './stores'
import { installPlugins } from './plugins/install'

// 添加基础公共样式
import './styles/common.styl'


const app = createApp(App)

// 注册全局插件
installPlugins(app)

// const win: any = window
// if (process.env.NODE_ENV === 'development') {
//   if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
//     // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
//     win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
//   }
// }

app
.use(store, key)
.use(router)
.mount('#app')
