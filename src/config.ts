// 项目基础配置
export default {
  appName: 'vue3-tempalte',
  logo: '',
  useDevRoute: true, // 是否使用本地开发路由做导航
  useTabMenu: true, // tabmenu显示
  loginWhiteRoutes: ['/login', '/about'], // token白名单
  authWhiteRoutes: ['/demo/template'],    // 权限白名单
  mustAuth: false, // 是否鉴权
}
