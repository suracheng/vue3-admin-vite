# Vue 3 + Typescript + Vite
- 使用 `yarn create vite vue3-admin --template vue` 创建项目
- 添加 tsconfig `npx tsc --init`


### commitlint
```bash
# 安装 commitlint
npm install --save-dev @commitlint/config-conventional  @commitlint/cli

# 第二种安装commitlint写法
# 如果命令窗口是 mac iterm2 或 windows cmder支持此复合写法安装 (windows cmd powershell不支持此写法会报错)
npm install --save-dev @commitlint/{cli,config-conventional}
```

```js
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

### husky 配置
TODO
```bash
# 安装husky
npm i husky -D

# 激活开启 husky 执行完会看到根目录下生成.husky文件夹 里面会保存husky add增加的hook文件
npx husky install

# 用husky添加一个commit-msg hook 代码提交时用来执行 commitlint命令
# yarn husky add 文件路径 写入命令内容 
yarn husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

# 再添加一个pre-commit hook 代码提交时 用来执行lint-staged命令
yarn husky add .husky/pre-commit 'npx --no-install lint-staged'

# --no-install 参数表示强制npx使用项目本地安装的commitlint 和 lint-staged npm包
```


### vite 配置按需加载UI组件

### src 下对.vue文件进行全局模块声明