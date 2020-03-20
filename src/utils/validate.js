    // 验证手机号
    export const validatePhone = (rule, value, callback) => {
        if (!value) {
            callback(new Error('手机号不能为空'))
        } else if (!/^1[34578]\d{9}$/.test(value)) {
            callback(new Error('手机号格式不正确'))
        } else {
            callback();
        }   
    }

    // 验证身份证 (15/18位)
    export const validateIDcard = (rule, value, callback) => {
        if (!value) {
            callback(new Error('身份证不能为空'))
        } else if (!/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(value)) {
            callback(new Error('身份证格式不正确'))
        } else {
            callback();
        }   
    }


