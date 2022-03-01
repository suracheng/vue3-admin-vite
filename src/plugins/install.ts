import { App } from 'vue'
import { installElementUI } from './element'

// 提供批量注册方法， 内部再按功能分类， 逐一注册
export function installPlugins (app: App) : void {
  installElementUI(app) // 注册elementUI组件
}