import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from "vite-plugin-pug"
import resolveExternalsPlugin from 'vite-plugin-resolve-externals'
// import styleImport from 'vite-plugin-style-import' // 按需导入样式
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { getCdnList } from './build/cdn/cdn'

const cdn = getCdnList()
const isProduction = process.env.NODE_ENV === 'production'

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  // 别名配置
  resolve: {
    alias: {
      "@": resolve("src"),
      "~": resolve("src"),
      stores: resolve('src/stores'),
      routers: resolve('src/routers'),
      plugins: resolve('src/plugins'),
      pages: resolve('src/pages'),
      assets: resolve('src/assets'),
      layouts: resolve('src/layouts'),
    },
    extensions: ['.vue', '.ts', 'js', '.json'] // 添加文件查找扩展名
  },
  plugins: [
    vue(),
    // 组件按需加载
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    pugPlugin(), // 添加 pug 插件
    resolveExternalsPlugin(cdn.externals)
    
    // styleImport({
    //   libs: [{
    //     libraryName: 'element-plus',
    //     esModule: true,
    //     ensureStyleFile: true,
    //     resolveStyle: (name) => {
    //       name = name.slice(3)
    //       return `element-plus/packages/theme-chalk/src/${name}.scss`;
    //     },
    //     resolveComponent: (name) => {
    //       return `element-plus/lib/${name}`;
    //     },
    //   }]
    // })
  ]
})
