import { createStore } from 'vuex'
import baseStore from './module/base'
import userStore from './module/user'
import config from '@/config'
// console.log(baseStore)
export interface rootState {
  appName ?: string,
  logo ?: string,
  useDevRoute ?: boolean,
  useTabMenu ?: boolean
}
const state : rootState = {
  appName: config.appName,
  logo: config.logo,
  useDevRoute: config.useDevRoute,
  useTabMenu: config.useTabMenu
}
export default createStore<rootState>({
  state,
  mutations: {},
  actions: {},
  modules: {
    baseStore,
    userStore
  }
})
