
// cdn配置项
// 公共
const cdnConfig = {
  externals: {
    vue: 'Vue',
    'element-plus': 'Element'
  },
  js: [
    {
      key: 'vue',
      url: 'https://unpkg.com/vue@3.2.20/dist/vue.global.js'
    },
    {
      key: 'element-plus',
      url: 'https://unpkg.com/element-plus@1.1.0-beta.19/dist/index.full.js'
    }
  ],
  css: [
    {
      key: 'element-plus',
      url: 'https://unpkg.com/element-plus@1.1.0-beta.19/dist/index.css'
    }
  ]
}
// 根据环境调整
const devCdnConfig = {
  externals: {},
  js: [],
  css: []
}

module.exports = {
  cdnConfig,
  devCdnConfig
}
