// 权限控制
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { pageAuth } from '@/apis/auth'

import router from './routers/router'
import { getters } from './stores/module/base'



// 路由添加一个导航守卫，在任何导航前执行。返回一个删除已注册守卫的函数
router.beforeEach((to, from, next) => {
  NProgress.start() // 进度条开始

  const login = getters.baseLogin() //获取登陆信息

  // 如果存在白名单，不需要登录/鉴权
  if (login.whiteRoutes.indexOf(to.path) !== -1) {
    next()
  }
  // 不属于白名单
  if (login.tokenFunc()) {
    const auth = getters.baseAuth() // 获取鉴权信息

    if (auth.mustAuth) {
      // 鉴权白名单 跳过
      if (auth.whiteRoutes.indexOf(to.path) !== -1) {
        next()
      } else {
        // 进行鉴权
        pageAuth().then((res) => {
          if (res) {
            next()
          }
        }).catch(() => {
          // 鉴权失败跳转至登录页面
          next({ path: '/login' })
        })
      }
    } else {
      next()
    }
  } else {
    next({
      path: '/login'
    })
  }

})

// 路由添加一个导航钩子，在每次导航后执行。返回一个删除注册钩子的函数
router.afterEach(() => {})


router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  console.log('beforeEach：to = ', to, 'from = ', from)
  const login = getters.baseLogin()
  if (login.whiteRoutes.indexOf(to.path) !== -1) {
    // 白名单，不需要登录，就更不需要鉴权了，直接next
    next()
  } else {
    // 不是白名单
    if (login.tokenFunc()) {
      // 找到token，就是下一步鉴权
      const auth = getters.baseAuth()
      if (auth.mustAuth) {
        // 必须鉴权，就鉴权
        if (auth.whiteRoutes.indexOf(to.path) !== -1) {
          // 白名单 - next
          next()
        } else {
          // 鉴权方法
          pageAuth().then((res) => {
            if (res) {
              next()
            }
          }).catch(() => {
            next({
              path: '/login'
            })
          })
        }
      } else {
        // 不鉴权，自己next
        next()
      }
    } else {
      // token找不到，就登录
      next({
        path: '/login'
      })
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done() // finish progress bar
  console.log('afterEach：to = ', to, 'from = ', from)
})

export default router
