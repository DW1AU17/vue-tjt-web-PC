<template>
    <Row>
        <i-col span="18" class="logo">
            <img src="@/assets/images/logo.png" alt="桐君堂">
        </i-col>
        <i-col span="6" class="h-right">
            <div class="login" v-if="!token">
                <router-link to="#">微信服务号</router-link><span>|</span>
                <router-link to="/login">登录</router-link><span>|</span>
                <router-link to="#">注册</router-link>
            </div>
            <div class="login" v-else>
                <router-link to="#">你好, {{ patientInfo.name }}</router-link><span>|</span>
                <router-link to="/mine" exact>个人中心</router-link><span>|</span>
                <router-link to="/mine/record">预约记录</router-link>
            </div>
            <div class="search">
                <Input :value="searchValue" @input="e => $emit('update:searchValue', e)" icon="md-search" placeholder="请输入..." />
            </div>
        </i-col>
    </Row>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'c-header',
    props: {
        searchValue: [String, Number]
    },
    computed: {
        ...mapState(['token', 'patientInfo'])
    }
}
</script>

<style scoped lang="less">
    @color: #821c21;
    @f-color: #444;
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

</style>
