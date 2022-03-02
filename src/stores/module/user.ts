import { Module, MutationTree, ActionTree } from 'vuex'
import { IRootState } from '../index'
import * as BaseTypes from '../base-type'

// 用户相关
export interface IUserState {
  name: string,
  token: string
}

// 基础配置
const state : IUserState = {
  name: '',
  token: ''
}
// export const userGetters = {
//   userName: () => state.name,
//   userToken: () => state.token
// }

type IMutations = MutationTree<IUserState>

const mutations: IMutations = {
  [BaseTypes.USER_NAME] (state, payload : string) {
    state.name = payload
  },
  [BaseTypes.USER_TOKEN] (state, payload : string) {
    state.token = payload
  }
}

// 定义action
type IActions = ActionTree<IUserState, IRootState>
const actions: IActions = {
  login({ commit }, userInfo: IUserState) {
    return new Promise((resolve, reject) => {
      // TODO
    })
  },
}
// UserState：当前子模块的state类型定义
// rootState：根级state的类型定义
const user : Module<IUserState, IRootState> = {
  namespaced: true,
  state,
  // getters: userGetters,
  actions,
  mutations
}
export default user
