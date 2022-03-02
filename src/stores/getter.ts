import { GetterTree } from 'vuex'
import { IRootState } from './index'

// 定义全局getters
const getters: GetterTree<IRootState, IRootState> = {
  token: (state) => state.user!.token,
  baseLogin: (state) => state.base.login,
  baseAuth: (state) => state.base.auth
}

export default getters
