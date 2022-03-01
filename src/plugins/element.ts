import { App } from 'vue'
// import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/dist/index.css'
import Element from 'element-plus'

// 全量导入，也可按需加载
export function installElementUI (app:App) : void {
  app.use(Element)
}