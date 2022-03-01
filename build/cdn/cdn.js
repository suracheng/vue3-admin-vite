import { isProduction } from '../utils'
const childProcess = require('child_process')
const { cdnConfig, devCdnConfig } = require('./cdnConfig')

// 获取当前分支名称
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
// console.log('branch分支名字是：', branch)

// 本地运行用local，提交到dev环境是dev、测试环境uat、线上master
function getEnvironmentCode () {
  let environmentCode = ''
  if (!isProduction) {
    // 本地使用的是local
    environmentCode = 'local'
  } else {
    // 打包模式：dev、release、master
    if (branch === 'dev') {
      environmentCode = 'dev'
    } else if (branch === 'release') {
      environmentCode = 'uat'
    } else if (branch === 'master') {
      environmentCode = 'master'
    } else {
      // 匹配不到安装release
      // TODO 要协商git规范
      environmentCode = 'uat'
    }
  }
  return environmentCode
}

// 导出cdn-list
export function getCdnList () {
  const cdn = {
    externals: {}, // 外链
    js: [],
    css: []
  }
  // 获取环境变量
  const env = getEnvironmentCode()
  // 合并配置 cdnConfig, devCdnConfig
  cdn.externals = Object.assign(cdnConfig.externals, devCdnConfig.externals)
  // dev去合并prd
  cdn.js = devCdnConfig.js.concat(cdnConfig.js)
  cdn.css = devCdnConfig.css.concat(cdnConfig.css)
  // 去重
  const jsSetarr = new Map()
  const cssSetarr = new Map()

  cdn.js = cdn.js.filter((itm) => !jsSetarr.has(itm.key) && jsSetarr.set(itm.key, 1))
  cdn.css = cdn.css.filter((itm) => !cssSetarr.has(itm.key) && cssSetarr.set(itm.key, 1))
  // 环境替换
  cdn.js.forEach(item => {
    if (item.url) {
      // 进行环境替换
      item.url = item.url.replace('$ENV$', env)
    }
  })

  return cdn
}
