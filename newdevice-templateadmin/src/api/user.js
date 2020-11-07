import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/session',
    method: 'post',
    data
  })
}
