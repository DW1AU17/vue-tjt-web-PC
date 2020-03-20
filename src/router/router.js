import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     redirect: '/index'
        // },
        {
            path: '/',
            component: () => import('@/pages/index'),
            children: [
                {
                    path: '/',
                    component: () => import('@/pages/index/indexBottom')
                },
                {
                    path: '/login',
                    component: () => import('@/pages/login')
                }
            ]
        }
    ]
})

export default router