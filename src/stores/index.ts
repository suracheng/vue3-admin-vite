import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import base, { IBaseState } from './module/base'
import user, { IUserState } from './module/user'
import getters from './getter'
import config from '@/config'

export interface IRootState {
  // appName?: string,
  // logo?: string,
  // useDevRoute?: boolean,
  // useTabMenu?: boolean,
  user: IUserState,
  base: IBaseState
}

// const state: IRootState = {
//   // appName: config.appName,
//   // logo: config.logo,
//   // useDevRoute: config.useDevRoute,
//   // useTabMenu: config.useTabMenu,
// }

// vuex store持久化 默认使用localstorage持久化
const persisteAppState = createPersistedState({
  storage: window.sessionStorage, // 指定storage 也可自定义
  key: 'vuex_app', // 存储名 默认都是vuex 多个模块需要指定 否则会覆盖
  // paths: ['app'] // 针对app这个模块持久化
  // 只针对app模块下sidebar.opened状态持久化
  paths: ['app.sidebar.opened', 'app.size'] // 通过点连接符指定state路径
})

const persisteUsersState = createPersistedState({
  key: 'vuex_user',
  paths: ['settings.theme']
})

export default createStore<IRootState>({
  plugins: [
    persisteAppState,
    persisteUsersState
  ],
  // state,
  mutations: {},
  actions: {},
  getters,
  modules: {
    base,
    user
  }
})

// https://vuex.vuejs.org/zh/guide/typescript-support.html
export const key: InjectionKey<Store<IRootState>> = Symbol()

// 定义自己的 `useStore` 组合式函数
// https://next.vuex.vuejs.org/zh/guide/typescript-support.html#%E7%AE%80%E5%8C%96-usestore-%E7%94%A8%E6%B3%95
export function useStore () {
  return baseUseStore(key)
}

