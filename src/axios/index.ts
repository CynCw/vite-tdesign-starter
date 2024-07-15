import { useAuthStore } from '~/store'

const instance = axios.create({
  timeout: 10000,
})

const router = useRouter()
// 添加请求拦截器
instance.interceptors.request.use((config) => {
  const token = useAuthStore().token
  if (token === '') {
    router.push('/login')
    return Promise.reject(new Error('No token, redirecting to login'))
  }

  config.headers.Authorization = `Bearer ${token}`

  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  if (response.status === 401) {
    router.push('/login')
    return Promise.reject(new Error('No Auth, redirecting to login'))
  }
  return response
}, (error) => {
  return Promise.reject(error)
})
export default instance
