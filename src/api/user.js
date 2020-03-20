import axios from 'axios'

// 登录, 获取用户信息
export function login(data) {
    return axios.post('/login', data) 
}

