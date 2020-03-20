export * from './validate'
export * from './auth'

export function debounce(fn, time = 1000) {
    let timer
    return function() {
        timer ? clearTimeout(timer) : fn()
        timer = setTimeout(() => {
            timer = null   
        }, time)
    }
} 