<template>
    <div>
        <div class="swiper">
             <Carousel v-model="value2" autoplay loop style="height: 100%;">
                <CarouselItem v-for="item in swiperList" :key="item">
                    <div class="demo-carousel">
                        <img :src="img" alt="">
                    </div>
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
import cFooter from './components/c-footer'
import cColumn from './components/c-column'
import cPavCard from './components/c-pavCard'
import cDocCard from './components/c-docCard'
import cDepCard from './components/c-depCard'

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
        'c-footer': cFooter,
        'c-column': cColumn,
        'c-pavCard': cPavCard,
        'c-docCard': cDocCard,
        'c-depCard': cDepCard
    },
    data() {
        return {
            secondNav,
            swiperList,
            pavList,
            docList,
            depList,
            value2: 0,
            img: require('@/assets/images/pic1.jpg')
        }
    }

}
</script>

<style scoped lang="less">
@color: #821c21;
@f-color: #444;
    .swiper {
        .demo-carousel {
            height: 470px;
            position: relative;
            overflow: hidden;
            img {
                height: 100%;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
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
    }
</style>
