<template>
    <div class="index">
        <!-- 头部 / 上部 -->
        <header class="header container">
            <Row>
                <Col span="18" class="logo">
                    <img src="@/assets/images/logo.png" alt="桐君堂">
                </Col>
                <Col span="6" class="h-right">
                    <div class="login">
                        <a href="#">微信服务号</a><span>|</span>
                        <a href="#">登录</a><span>|</span>
                        <a href="#">注册</a>
                    </div>
                    <div class="search">
                        <Input v-model="searchValue" icon="md-search" placeholder="请输入..." />
                    </div>
                </Col>
            </Row>
        </header>
        <nav class="first-nav">
            <c-nav :navList="firstNav" />
        </nav>
        <div class="swiper">
             <Carousel v-model="value2" autoplay loop arrow="never" style="height: 100%;">
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
            3
        </div>
        <!-- 底部 -->
        <footer class="foot">
            <div class="container">
                4
            </div>
        </footer>
    </div>
</template>

<script>
import cNav from '@/components/c-nav'
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
let swiperList = [
    {id: 1},
    {id: 2},
    {id: 3}
]

export default {
    components: {
        'c-nav': cNav
    },
    data() {
        return {
            searchValue: '',
            firstNav,
            secondNav,
            swiperList,
            value2: 0,
            img
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
        .logo {
            img {
                height: 70px;
                margin-top: 23px;
            }
        }
        .h-right {
            margin-top: 34px;
            text-align: right;
            .login {
                span {
                    margin: 0 7px;
                }
                a {
                    color: @f-color;
                }
            }
            .search {
                margin-top: 6px;
                /deep/ input {
                    width: 240px;
                    height: 26px;
                    border-color: @color;
                    font-size: 13px;
                }
                /deep/ i {
                    line-height: 26px;
                    cursor: pointer;
                }
            }
        }
    }
    .first-nav {
        height: 60px;
        background-color: #d4cbbd;
        
    }
    .swiper {
        background-color: skyblue;
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
        background-color: tomato;
    }
    .foot {
        height: 468px;
        background-color: #585657;
    }
}

</style>
