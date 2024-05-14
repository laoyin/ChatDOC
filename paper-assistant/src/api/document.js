import request from '@/utils/requests'

export function sendOoxml(data) {
  return request({
    url: '/ooxml',
    method: 'post',
    data:data
  })
}