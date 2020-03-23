const TOKEN = 'token'
const userInfo = 'userInfo'

export const getToken = () => { return localStorage.getItem(TOKEN) }

export const setToken = token => localStorage.setItem(TOKEN, token) 

export const removeToken = () => localStorage.removetItem(TOKEN) 


// 缓存用户信息
export const getUserInfo = () => { return JSON.parse(localStorage.getItem(userInfo)) }

export const setUserInfo = obj => localStorage.setItem(userInfo, JSON.stringify(obj)) 

export const removeUserInfo = () => localStorage.removetItem(userInfo) 