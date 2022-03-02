import fetch from '../plugins/request'

export const pageAuth = () => {

  return fetch.post('/auth/page')
}
