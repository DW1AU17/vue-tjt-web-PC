const patientInfo = {
    name: '发财',
    mobile: '17800008888',
    idCard: '330622190001034567',
    address: '杭州市西湖区湖景别墅1101栋'
}

const token = +new Date() + '' + Math.ceil(Math.random()*1000000000000) + 'DYT'

export default [
    {
        url: '/login',
        type: 'post',
        response: config => {
            let { mobile, IDcard } = JSON.parse(config.body)
            if (mobile === '17855810911' && IDcard === '330682199510144413') {
                return { data: patientInfo, ret: 0, msg: '操作成功', token }
            } else {
                return { ret: 1, msg: '信息有误'}
            }
        }
    }
]