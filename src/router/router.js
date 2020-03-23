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
                },
                {
                    path: '/mine',
                    component: () => import('@/pages/personalCenter'),
                    children: [
                        {
                            path: '/mine',
                            component: () => import('@/pages/personalCenter/profile')
                        },
                        {
                            path: '/mine/record',
                            component: () => import('@/pages/personalCenter/record')
                        }
                    ]
                },
                {
                    path: '/dep',
                    component: () => import('@/pages/department')
                },
            ]
        }
    ],
    linkActiveClass: 'link-active'   // 高亮类名重新起名
})

export default router