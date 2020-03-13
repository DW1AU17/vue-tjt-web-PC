<template>
    <Row>
        <i-col span="18" class="logo">
            <img src="@/assets/images/logo.png" alt="桐君堂">
        </i-col>
        <i-col span="6" class="h-right">
            <div class="login">
                <a href="#">微信服务号</a><span>|</span>
                <a href="#">登录</a><span>|</span>
                <a href="#">注册</a>
            </div>
            <div class="search">
                <Input :value="searchValue" @input="e => $emit('update:searchValue', e)" icon="md-search" placeholder="请输入..." />
            </div>
        </i-col>
    </Row>
</template>

<script>
export default {
    name: 'c-header',
    props: {
        searchValue: [String, Number]
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
