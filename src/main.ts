import { createApp } from 'vue'

import App from './App.vue'
import router from './routers/router'
import store from './stores'
import { installPlugins } from './plugins/install'

// 添加基础公共样式
import './styles/common.styl'


const app = createApp(App)

// 注册全局插件
installPlugins(app)

app
.use(store)
.use(router)
.mount('#app')
