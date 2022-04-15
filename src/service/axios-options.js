import axios from 'axios'
const instanceAxios = axios.create({timeout:10000})
instanceAxios.interceptors.request.use((config) => {
  return config
}, err => {
  return Promise.reject(err)
})
instanceAxios.interceptors.response.use((response) => {
  let isDownload = false
  isDownload = Object.prototype.toString.call(response.data) === '[object Blob]'
  let switchCode = isDownload ? 200 : response?.data?.code
  switch (switchCode) {
    case '1000':
    case 1000:
    case 200:
      return response.data?.data ?? response.data
    case 403:
      break
    case 401:
      this.$router.push('/login')
      break
    default:
      let errMsg = {
        code: response?.data?.code,
        message: response?.data?.msg ?? '请求失败'
      }
      return Promise.reject(errMsg)
  }
}, err => {
  return Promise.reject(err)
})
export default instanceAxios
