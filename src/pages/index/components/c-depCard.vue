<template>
    <div class="dep-swiper">    
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in list" :key="item">
                <router-link to="/index/1" class="dep-item">
                    <div class="left">
                        <span class="line1"></span>
                        <span class="line2"></span>
                    </div>
                    <span class="text">中医内内科</span>
                </router-link>
            </swiper-slide>
        </swiper>
            <!--以下看需要添加-->
        <div class="swiper-button-next"></div> 
        <div class="swiper-button-prev"></div> 
    </div>
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
                slidesPerView: 14,  // 显示个数
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
    .dep-swiper {
        height: 242px;
        width: 1100px;
        background: url('../../../assets/images/jz.png');
        padding: 46px 70px 46px 80px;
        margin-left: -38px;
        position: relative;
        .dep-item {
            display: inline-block;
            width: 70px;
            margin-right: 0;
            .left {
                width: 7px;
                height: 100%;
                float: left;
                .line1, .line2 {
                    height: 95px;
                    display: inline-block;
                }
                .line1 {
                    width: 3px;
                    background: #fff;
                    margin-right: 2px;
                }
                .line2 {
                    width: 2px;
                    background: #c6c6c6;
                }

            }
            .text {
                font-size: 16px;
                padding-top: 30px;
                padding-left: 10px;
                font-weight: 700;
                writing-mode: vertical-lr; 
                writing-mode: tb-lr;
            }
            &:hover {
                .line1 {
                    background: @color;
                }
                .line2 { 
                    background: #c19594;
                }
                .text {
                    color: @color;
                }
            }
        }
        .swiper-button-next, .swiper-button-prev {
            width: 20px;
            height: 34px;
        }
        .swiper-button-next {
            background: url('../../../assets/images/right.png');
            right: 40px;
        }
        .swiper-button-prev {
            background: url('../../../assets/images/left.png');
            left: 40px;
        }  
    }
</style>
