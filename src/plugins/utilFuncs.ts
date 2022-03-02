export const isProd = process.env.NODE_ENV === 'production'

// 获取环境
export function getEnv (): string {
  const host = location.host
  let env = ''

  if (host.includes('dev.')) {
    env = '-dev'
  } else if (host.includes('test.')) {
    env = '-test'
  } else if (host.includes('ka.shinho.net.cn')) {
    // 显示
    env = ''
  } else {
    env = 'dev'
  }
  return env
}

export function getBaseUrl (): string {
  return `${location.protocol}//xxx-${getEnv()}.xxx.com`
}
