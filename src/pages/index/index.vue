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
                <CarouselItem v-for="item in swiperList" :key="item.id">
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
                    <c-depInfo :list="depInfoList" />
                </template>
            </c-column>
             <c-column>
                <template #title>专家介绍</template>
                <template #content>
                    <div class="doc-swiper">   
                        <swiper :options="swiperOption">
                            <swiper-slide><img src="../../assets/images/code.jpg"></swiper-slide>
                            <swiper-slide><img src="../../assets/images/code.jpg"></swiper-slide>
                            <swiper-slide><img src="../../assets/images/code.jpg"></swiper-slide>
                            <swiper-slide><img src="../../assets/images/code.jpg"></swiper-slide>
                            <swiper-slide><img src="../../assets/images/code.jpg"></swiper-slide>
                            <swiper-slide><img src="../../assets/images/code.jpg"></swiper-slide>
                        </swiper>
                            <!--以下看需要添加-->
                        <div class="swiper-scrollbar"></div> 
                        <div class="swiper-button-next"></div> 
                        <div class="swiper-button-prev"></div> 
                        <div class="swiper-pagination"></div> 
                    </div>
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
import cDepInfo from './components/c-depInfo'
import img from '@/assets/images/pic1.jpg'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

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
let swiperList = [
    {id: 1},
    {id: 2},
    {id: 3}
]
let depInfoList = [
    {id: 1, name: '武林馆', path: '/index/11', img: '' },
    {id: 2, name: '武林馆', path: '/index/11', img: '' },
    {id: 3, name: '武林馆', path: '/index/11', img: '' },
    {id: 4, name: '武林馆', path: '/index/11', img: '' },
    {id: 5, name: '武林馆', path: '/index/11', img: '' },
]

export default {
    components: {
        'c-nav': cNav,
        'c-header': cHeader,
        'c-footer': cFooter,
        'c-column': cColumn,
        'c-depInfo': cDepInfo,
        swiper,
        swiperSlide
    },
    data() {
        return {
            searchValue: '',
            firstNav,
            secondNav,
            swiperList,
            depInfoList,
            value2: 0,
            img,
            swiperOption: {
                autoplay: 3000,
                speed: 1000,
            }
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
        .doc-swiper {
            position: relative;
        }
    }
}

</style>
