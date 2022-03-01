import type { Component } from 'vue'


interface META {
  system: string,
  isModule?: boolean, // 是否模块
  icon?: string,
  codes?: Array<string>
}

// route 类型
export interface SRouter {
  path: string,
  name: string,
  icon?: string,
  hidden?: boolean,
  meta?: META,
  redirect?: string,
  component?: Component, // 这里组件是一个Component类型
  children: Array<SRouter>
}