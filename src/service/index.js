import qs from 'qs'
import instanceAxios from './axios-options'
import store from '@/store'
// import { Loading, Notification } from 'element-plus'
let loadingInstance
export default async function fetch ({
  method = 'get',
  url,
  data,
  params,
  isJSON = true,
  emptyToken = false, // 是否需要token
  ...args
}) {
  // NProgress.start()
  if (!loadingInstance) {
    // loadingInstance = Loading.service({ target: document.querySelector('.el-main') })
  }
  let option = {
    method,
    url,
    data: (isJSON || data instanceof FormData)
      ? data
      : typeof data === 'string'
        ? data
        : qs.stringify(data),
    params,
    ...args
  }
  option.headers = {
    Authorization: emptyToken ? '' : (store?.state?.user?.token ?? '')
  }
  let sucess=undefined;
  let error=undefined;
  try {
    sucess= await instanceAxios(option)
    return result
  } catch (e) {
    if (e?.code === '403') {
      this.app.prototype.$logout().then(() => {
        window.location.reload()
      })
    }
    error = e
    console.log(e)
    Notification({
      title: '操作失败',
      type: 'error',
      message: e.message
    })
  } finally {
    if (loadingInstance) {
      loadingInstance.close()
    }
    loadingInstance = ''
  }
  return [sucess,error]
}
