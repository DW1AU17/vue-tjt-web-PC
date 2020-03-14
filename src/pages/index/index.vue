<template>
    <div class="index">
        <!-- 头部 / 上部 -->
        <header class="header container">
            <c-header :searchValue.sync="searchValue" @keyup.enter.native="search" />
        </header>
        <nav class="first-nav">
            <c-nav :navList="firstNav" />
        </nav>
        <div class="swiper">
             <Carousel v-model="value2" autoplay loop style="height: 100%;">
                <CarouselItem v-for="item in swiperList" :key="item">
                    <div class="demo-carousel" :style="{backgroundImage: `url(${img})`}"></div>
                </CarouselItem>
            </Carousel>
        </div>
         <nav class="second-nav">
            <c-nav :navList="secondNav" />
        </nav>
        <!-- 主体 -->
        <div class="main container">
            <c-column>
                <template #title>分馆介绍</template>
                <template #content>
                    <c-pavCard :list="pavList" />
                </template>
            </c-column>
            <c-column>
                <template #title>专家介绍</template>
                <template #content>
                    <c-docCard :list="docList" />
                </template>
            </c-column>
            <c-column>
                <template #title>科室介绍</template>
                <template #content>
                    <c-depCard :list="depList" />
                </template>
            </c-column>
        </div>
        <!-- 底部 -->
        <c-footer />
    </div>
</template>

<script>
import cNav from './components/c-nav'
import cHeader from './components/c-header'
import cFooter from './components/c-footer'
import cColumn from './components/c-column'
import cPavCard from './components/c-pavCard'
import cDocCard from './components/c-docCard'
import cDepCard from './components/c-depCard'
import img from '@/assets/images/pic1.jpg'

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
let secondNav = [
    { path: '/index/department', name: '科室介绍' },
    { path: '/index/experts', name: '专家介绍' },
    { path: '/index/nav', name: '分馆导航' },
    { path: '/index/report', name: '报告查询' },
    { path: '/index/mall', name: '桐君商城' },
    { path: '/index/order', name: '预约挂号' },
]
let swiperList = [1, 2, 3]
let pavList = [1, 2, 3, 4, 5]
let docList = [1, 2, 3, 4, 5, 6]
let depList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

export default {
    components: {
        'c-nav': cNav,
        'c-header': cHeader,
        'c-footer': cFooter,
        'c-column': cColumn,
        'c-pavCard': cPavCard,
        'c-docCard': cDocCard,
        'c-depCard': cDepCard
    },
    data() {
        return {
            searchValue: '',
            firstNav,
            secondNav,
            swiperList,
            pavList,
            docList,
            depList,
            value2: 0,
            img
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
@color: #821c21;
@f-color: #444;
.index {
    .header {
        height: 108px;
        background-color: pink;
    }
    .first-nav {
        height: 60px;
        background-color: #d4cbbd;
        
    }
    .swiper {
        // background-color: tomato;
        .demo-carousel {
            height: 470px;
            background-position: center;
            background-size: cover;
        }
        /deep/ .ivu-carousel-dots-inside {
            .ivu-carousel-active {
                button {
                    width: 80px;
                    background-color: @color;
                }
            }
            button {
                width: 38px;
                height: 6px;
                opacity: 1;
                background-color: #fff;
            }
        }
    }
    .second-nav {
        height: 60px;
        background-color: #9f8350;
        /deep/ a {
            color: #fff;
            &:hover {
                border-color: #fff;
            }
        }
    }
    .main {
        min-height: 300px;
        background-color: skyblue;
    }
}

</style>
