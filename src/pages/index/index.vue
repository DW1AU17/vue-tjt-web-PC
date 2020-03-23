<template>
    <div class="index">
        <!-- 头部 / 上部 -->
        <header class="header container">
            <c-header :searchValue.sync="searchValue" @keyup.enter.native="search" />
        </header>
        <nav class="first-nav">
            <c-nav :navList="firstNav" />
        </nav>
        <router-view />
        <!-- 底部 -->
        <c-footer />
    </div>
</template>

<script>
import cNav from '@/components/c-nav'
import cFooter from './components/c-footer'
import cHeader from './components/c-header'
 
let firstNav = [
    { path: '/', name: '首页' },
    { path: '/dep', name: '分馆介绍' },
    { path: '/1', name: '医药产业' },
    { path: '/2', name: '新闻资讯' },
    { path: '/3', name: '健康养生' },
    { path: '/4', name: '华颜会' },
    { path: '/5', name: '人才招聘' },
    { path: '/6', name: '联系我们' },
]

export default {
    components: {
        'c-nav': cNav,
        'c-footer': cFooter,
        'c-header': cHeader
    },
    data() {
        return {
            searchValue: '',
            firstNav
        }
    },
    methods: {
        search() {
            console.log('回车了', this.searchValue)
        },
    }
}
</script>

<style scoped lang="less">
.index {
    height: 100%;
    .header {
        height: 108px;
    }
    .first-nav {
        height: 60px;
        background-color: #d4cbbd;
    }
}

</style>
