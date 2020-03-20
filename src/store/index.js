import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '../utils'
import { login } from '@/api/user'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        patientInfo: {},
        token: getToken()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_PAT_INFO: (state, info) => {
            state.patientInfo = info
        }
    },
    actions: {
        async userLogin({ commit }, userInfo) {
            let res = await login(userInfo)   // 调用api中的login方法
            return new Promise((resolve, reject) => {
                if (res.data.ret === 0) {
                    let { token, data } = res.data
                    commit('SET_TOKEN', token)  // token存到vuex中
                    commit('SET_PAT_INFO', data)
                    setToken(token)
                    resolve('操作成功')
                } else {
                    reject()
                }
            })
        }
    },
    getters: {

    }
})