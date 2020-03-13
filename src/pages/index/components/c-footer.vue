<template>
    <div class="foot">
        <!-- 医馆地址 -->
        <div class="address container">
            <Row>
                <i-col :span="item.span" v-for="item in addressList" :key="item.id">
                    <p>
                        <Icon type="ios-navigate-outline" /> {{ item.name }} <Icon type="ios-call-outline" /> {{ item.tel }}
                    </p>
                </i-col>
            </Row>
        </div>
        <!-- 二维码 -->
        <div class="qr-code">
            <Row class="container" align="middle">
                <i-col span="16">
                    <div class="card" v-for="item in qrCodeList" :key="item.id">
                        <div style="text-align:center">
                            <img :src="require('@/assets/images/code.jpg')">
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
                </i-col>
                <i-col span="8" class="title">
                    <p v-for="(item, index) in titleList" :key="index">{{item}}</p>
                </i-col>
            </Row>
        </div>
        <!-- 备案 -->
        <div class="for-the-record container">
            <Row>
                <i-col span="12">
                    <router-link to="/index/1">网站地址</router-link><span>|</span>
                    <router-link to="/index/1">使用绑定</router-link><span>|</span>
                    <router-link to="/index/1">隐私安全</router-link><span>|</span>
                    <router-link to="/index/1">版权声明</router-link><span>|</span>
                    <router-link to="/index/1">联系我们</router-link>
                </i-col>
                <i-col span="12" class="num">
                    <span>浙ICP备13023446号-1 版权所有 桐君堂 2011 All Right Reservic</span>
                </i-col>
            </Row>
        </div>
    </div>
</template>

<script>
let titleList = ['省市医保定点单位','省市一卡通定点单位','省侨联定点医疗机构','西湖区五星级门诊部','杭城最可信的名医名药馆','浙江中医药大学留学生临床实践基地','浙江中医药大学药学院学生专业实践基地']
let qrCodeList = [
    {id: 1, name: '桐君堂中医馆', img: ''},
    {id: 2, name: '桐君堂中医馆', img: ''},
    {id: 3, name: '桐君堂中医馆', img: ''},
]
let addressList = [
    {id: 1, name: '桐君堂 (武林馆)： 杭州市体育场路474号', tel: '0571-85216577', span: '12' },
    {id: 2, name: '桐君堂 (环西馆)： 杭州市环城西路92号', tel: '0571-87099390', span: '12' },
    {id: 3, name: '桐君堂 (城站馆)： 杭州市郭东园巷2号', tel: '0571-86072747', span: '12' },
    {id: 4, name: '桐君堂 (东新馆)： 杭州市东新路737号', tel: '0571-56095619', span: '12' },
    {id: 5, name: '桐君堂 (城西馆)： 杭州市古墩路632号(同人精华酒店1楼)', tel: '0571-88080029', span: '18' }
]

export default {
    data() {
        return {
            titleList,
            qrCodeList,
            addressList
        }
    }

};
</script>

<style lang="less" scoped>
    .foot {
        color: #fff;
        // height: 468px;
        background-color: #585657;
        .container {
            padding: 0 32px;
            height: auto;
        }
        // 地址
        .address {
            padding: 28px 0;
            .ivu-col {
                &:nth-child(even) p {
                    border-left: 2px solid #fff;
                    padding-left: 75px;
                }
            }
            p {
                margin: 8px 0;
                i {
                    font-size: 16px;
                    &:last-child {
                        margin-left: 20px;
                    }
                }
            }
        }
        // 二维码
        .qr-code {
            padding: 32px 0;
            border-top: 2px solid #7f7e7f;
            border-bottom: 2px solid #7f7e7f;
            .title {
                text-align: right;
            }
            .card {
                display: inline-block;
                width: 114px;
                margin-right: 40px;
                margin-top: 6px;
                img {
                    width: 100%;
                }
            }
        }
        // 备案
        .for-the-record {
            color: #888;
            padding-top: 20px;
            padding-bottom: 20px;
            a {
                color: #888 ;
            }
            span {
                margin: 0 5px;
            }
            .num {
                text-align: right;
            }
        }
    }
</style>
