// 使用接口方法获取数据
import axios from '@/untils/myaxios'

export const getAllUsers = (params) => {
  return axios({
    url: 'users',
    params
  })
}
