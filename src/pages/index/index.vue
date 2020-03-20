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
    </div>
</template>

<script>
import cNav from './components/c-nav'
import cHeader from './components/c-header'


let firstNav = [
    { path: '/index/index', name: '首页' },
    { path: '/index/culture', name: '桐君文化' },
    { path: '/index/medicine', name: '医药产业' },
    { path: '/index/news', name: '新闻资讯' },
    { path: '/index/health', name: '健康养生' },
    { path: '/index/other', name: '华颜会' },
    { path: '/index/talent', name: '人才招聘' },
    { path: '/index/contact', name: '联系我们' },
]


export default {
    components: {
        'c-nav': cNav,
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
        }
    }
}
</script>

<style scoped lang="less">
.index {
    height: 100%;
    background: url('../../assets/images/11.jpg') repeat;
    .header {
        height: 108px;
    }
    .first-nav {
        height: 60px;
        background-color: #d4cbbd;
    }
}

</style>
