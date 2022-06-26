import axios from 'axios'
import router from '../router/router'

const service = axios.create({
  // baseURL: 'http://localhost:5000'
  // baseURL: 'http://106.14.116.219:5000'
  baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost:5000' : 'http://106.14.116.219:5000',
  headers: {
    'token': localStorage.getItem('token') || '',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

service.defaults.headers.post['Content-Type'] = 'application/json'

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject()
  }
)

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.data.code == 416) {
        router.push('/login')
      }
      if (response.data.data && window.location.hash == '#/login') {
        localStorage.setItem('token', response.data.data)
        service.defaults.headers['token'] = response.data.data
      }
      return response.data
    } else {
      Promise.reject()
    }
  },
  (error) => {
    console.log(error)
    return Promise.reject()
  }
)

export default service