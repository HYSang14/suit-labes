import axios from 'axios'

const service = axios.create({
    baseURL: '',
    timeout: 60000,
    withCredentials:true, // 异步请求携带cookie
    headers: {
        'Content-Type': 'application/json',
        'token': 'your token',
        'X-Requested-With': 'XMLHttpRequest'
    }
})

service.interceptors.request.use(
    function (config) {
        return config
    },

    function (error) {
        console.log(error);
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    function (response) {
        console.log(response);
        
    }
)