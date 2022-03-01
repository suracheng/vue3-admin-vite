import { Module } from 'vuex'
import { rootState } from '../index'
import * as BaseTypes from '../base-type'

// 用户相关
export interface UserState {
  name: string,
  token: string
}

// 基础配置
const state : UserState = {
  name: '',
  token: ''
}
export const userGetters = {
  userName: () => state.name,
  userToken: () => state.token
}
// UserState：当前子模块的state类型定义
// rootState：根级state的类型定义
const user : Module<UserState, rootState> = {
  namespaced: true,
  state,
  getters: userGetters,
  actions: {},
  mutations: {
    [BaseTypes.USER_NAME] (state, payload : string) {
      state.name = payload
    },
    [BaseTypes.USER_TOKEN] (state, payload : string) {
      state.token = payload
    }
  }
}
export default user
