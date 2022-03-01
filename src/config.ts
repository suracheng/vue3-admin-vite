// 项目基础配置
export default {
  appName: 'vue3-tempalte',
  logo: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%93%86%E5%95%A6A%E6%A2%A6%E5%B0%8F%E5%9B%BE&step_word=&hs=0&pn=62&spn=0&di=7042744173476184065&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=4104956386%2C2702056538&os=151216657%2C273381221&simid=4248893194%2C673478663&adpicid=0&lpn=0&ln=1895&fr=&fmq=1646036963664_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F22%2F20150522032918_v3BZs.jpeg%26refer%3Dhttp%3A%2F%2Fb-ssl.duitang.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1648628967%26t%3De8172fa56eb5fb2d126de21b16883dde&gsm=5a&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined&dyTabStr=MCwzLDYsMSw0LDgsNyw1LDIsOQ%3D%3D',
  useDevRoute: true, // 是否使用本地开发路由做导航
  useTabMenu: true, // tabmenu显示
  // 登录肯定是需要登录的
  loginWhiteRoutes: ['/login', '/about'], // token白名单
  authWhiteRoutes: ['/demo/template'],    // 权限白名单
  mustAuth: false, // 是否鉴权
}