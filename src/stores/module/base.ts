import { Module } from 'vuex'
import { rootState } from '../index'
import * as BaseTypes from '../base-type'
import { userGetters } from './user'
import config from '@/config'

interface someFunc {
  () : boolean
}
export interface BaseState {
  // config：固定后无法进行变动的设置
  // control：可以程序改动
  control: {
    navCollapse: boolean
  },
  // 登录相关
  login: {
    tokenFunc: someFunc,       // 获取token方法，也就是获取token就跳转，不获取就登录页面，后期扩展
    whiteRoutes: Array<string> // 不需要登录白名单
  },
  // 权限相关
  auth: {
    mustAuth: boolean, // 跳转页面检查
    whiteRoutes: Array<string>
  }
}

// 基础配置
const state : BaseState = {
  control: {
    navCollapse: false
  },
  login: {
    tokenFunc: () => {
      return Boolean(userGetters.userName())
    },
    whiteRoutes: config.loginWhiteRoutes
  },
  auth: {
    mustAuth: config.mustAuth,
    whiteRoutes: config.authWhiteRoutes
  }
}
export const getters = {
  baseLogin: () => state.login,
  baseAuth: () => state.auth
}
// 参数1：当前子模块的state类型定义
// 参数2：根级state的类型定义
const base : Module<BaseState, rootState> = {
  namespaced: true,
  state,
  getters,
  actions: {},
  mutations: {
    [BaseTypes.LOGIN_TOKEN_FUNC] (state, payload : someFunc) {
      state.login.tokenFunc = payload
    },
    [BaseTypes.LOGIN_WHITE_ROUTERS] (state, payload : Array<string>) {
      state.login.whiteRoutes = payload
    },
    [BaseTypes.CONTROLL_NAV_COLLAPSE] (state) {
      state.control.navCollapse = !state.control.navCollapse
    }
  }
}
export default base
