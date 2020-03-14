<template>
    <!-- 医生介绍Card -->
    <Row type="flex" justify="center">
        <div class="doc-swiper">   
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in list" :key="item">
                    <router-link to="/index/1" class="doc-info">
                        <div class="img">
                            <img src="../../../assets/images/zp.jpg" alt="">
                        </div>
                        <p class="fs-16 fc-333 dep-name">朱平</p>
                        <p class="fs-14 fc-666 the-title">国家级名中医</p>
                        <span class="line"></span>
                        <p class="fs-12 fc-666 introduce">
                            全国名老中医学经验继承知道老师，消化道、心血管疾病及内科杂症,全国名老中医学经验继承知道老师，消化道、心血管疾病及内科杂症
                        </p>
                    </router-link> 
                </swiper-slide>
            </swiper>
                <!--以下看需要添加-->
            <div class="swiper-button-next"></div> 
            <div class="swiper-button-prev"></div> 
        </div>
    </Row>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    components: {
        swiper,
        swiperSlide
    },
    props: {
        list: [ Array ]
    },
    data() {
        return {
            swiperOption: {   // 医生介绍轮播图参数
                slidesPerView: 5,
                spaceBetween: 10,
                autoplay: {
                    disableOnInteraction: false,
                },
                delay: 2000
            }
        }
    }
}
</script>

<style lang="less" scoped>
    @color: #821c21;
    .doc-swiper {
        width: 960px;
        position: relative;
        .doc-info {
            display: inline-block;
            width: 185px;
            height: 271px;
            background: url('../../../assets/images/lb-k.png');
            text-align: center;
            padding: 18px;
            img {
                width: 115px;
                height: 115px;
                border-radius: 50%;
                border: 3px solid #9d8680;
                margin-bottom: 10px;
            }
            .the-title {
                line-height: 29px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .line {
                width: 52px;
                height: 2px;
                background-color: #666; 
            }
            .introduce {
                width: 148px;
                line-height: 16px;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
            &:hover:after {
                content: '';
                width: 169px;
                height: 257px;
                position: absolute;
                top: 8px;
                left: 7px;
                padding: 6px;
                background-color: #fff;
                z-index: -1;
            }
            &:hover p {
                color: @color;
            }
        }
        .swiper-button-next, .swiper-button-prev {
            width: 20px;
            height: 34px;
        }
        .swiper-button-next {
            background: url('../../../assets/images/right.png');
            right: -26px;
        }
        .swiper-button-prev {
            background: url('../../../assets/images/left.png');
            left: -26px;
        }
    }
</style>
