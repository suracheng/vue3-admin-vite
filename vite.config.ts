import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from "vite-plugin-pug" // 解析 pug 模版
import resolveExternalsPlugin from 'vite-plugin-resolve-externals' // vite 解析外链包
// import styleImport from 'vite-plugin-style-import' // 按需导入样式
import AutoImport from 'unplugin-auto-import/vite' // 根据需要自动导入 vite api
import Components from 'unplugin-vue-components/vite' // 自动导入组件
import { createHtmlPlugin } from 'vite-plugin-html'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { getCdnList } from './build/cdn/cdn'
import { isProduction } from './build/utils'

const cdn = getCdnList()
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// 处理html模版中需要的外链文件
function handleScript () {
  const scripts: string[] = []

  Object.entries(cdn).forEach(([key, value]: any) => {
    if (['css', 'js'].includes(key)) {
      value.forEach((item) => {
        scripts.push(`
          <link href="${item.url}" rel="preload" as="${key === 'css' ? 'style' : 'script'}">
        `)
        if (key === 'css') {
          scripts.push(`
            <link href="${item.url}" rel="stylesheet">
          `)
        }
      })
    }
  })
  return scripts.join('')
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
    extensions: ['.vue', '.ts', 'js', '.json'] // 文件查找扩展名
  },
  plugins: [
    vue(),
    // api 按需导入
    AutoImport({resolvers: [ElementPlusResolver()],}),
    // 组件按需加载
    Components({resolvers: [ElementPlusResolver()],}),
    // 外链模块
    resolveExternalsPlugin(cdn.externals),
    // 添加 pug 插件
    pugPlugin(),

    // 创建 html 模版
    createHtmlPlugin({
      minify: true,
      /**
       * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
       * @default src/main.ts
       */
      // entry: 'src/main.ts',
      /**
       * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
       * @default index.html
       */
      template: 'public/index.html',

      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          title: 'vue3 template',
          injectScript: handleScript(),
        }
      },
    }),

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
  ],
  build: {
    // 非生产环境下开启 sourcemap 调试
    sourcemap: !isProduction ? true : false
  }

  // TODO 本地添加自研插件
})
