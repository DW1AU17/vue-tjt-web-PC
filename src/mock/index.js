import Mock from 'mockjs'
import login from './login'

let mocks = [...login]

mocks.forEach(item => {
    let { url, type, response} = item
    Mock.mock( url, type, response)
})
