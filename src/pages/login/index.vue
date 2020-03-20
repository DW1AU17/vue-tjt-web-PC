<template>
    <div class="login">   
        <div class="input-second">
            <div class="title fs-18">用户登录</div>
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="56" hide-required-mark>
                <FormItem label="手机号" prop="mobile">
                    <Input v-model="formCustom.mobile" icon="md-call" placeholder="请输入手机号"/>
                </FormItem>
                <FormItem label="身份证" prop="IDcard">
                    <Input v-model="formCustom.IDcard" icon="ios-contact" placeholder="请输入身份证号"/>
                </FormItem>
                <!-- <FormItem label="验证码">
                    <Input v-model="formCustom.value4" placeholder="请输入验证码" style="width: 154px" />
                    <Button type="primary" class="send">发送</Button>
                </FormItem> -->
                <Button type="success" long class="login-btn" @click="handleSubmit('formCustom')">登 录</Button>
                <div class="notice">新用户登录默认注册</div>
            </Form>
        </div>    
        <div class="QRcode">
            <img src="@/assets/images/code.jpg" alt="">    
            <p>打开微信扫一扫</p>
            <p>关注“桐君堂”</p>
        </div>     
    </div>
</template>

<script>
import { validatePhone, validateIDcard } from '@/utils'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            formCustom: {
                mobile: '17855810911',
                IDcard: '330682199510144413'
            },
            ruleCustom: {
                // 验证名 要何属性名对应
                mobile: [
                    { required: true, validator: validatePhone, trigger: 'blur' },
                ],
                IDcard: [
                    { required: true, validator: validateIDcard, trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        ...mapActions(['userLogin']),
        handleSubmit (name) {
            this.$refs[name].validate(async (valid) => {
                if (valid) {
                    // 调用vuex中的登录方法
                    let res = await this.userLogin(this.formCustom)
                    this.$Message.success(res)
                } 
            })
        }
    }
}
</script>

<style lang="less" scoped>
    @color: #94252a;
    .login {
        width: 768px;
        height: 340px;
        background-color: #fff;
        margin: 90px auto;
        box-shadow: 2px 6px 9px 1px rgba(0,0,0,0.2);
        padding: 28px 0;
        // 左侧登录
        /deep/ .input-second {
            display: inline-block;
            width: 454px;
            padding: 0 86px;
            border-right: 1px solid @color;
            .title {
                color: @color;
                margin-bottom: 38px;
                font-weight: 700;
            }
            .ivu-form-item {
                margin-bottom: 0;
                .send {
                    height: 40px;
                    margin-left: 12px;
                    margin-top: -23px;
                    background-color: @color;
                    border: none;
                }
                .ivu-icon {
                    height: 40px;
                    width: 40px;
                    font-size: 18px;
                    line-height: 40px;
                }
                .ivu-input {
                    height: 40px;
                    border-color: @color;
                    margin-bottom: 22px;
                }
                .ivu-form-item-error-tip {
                    top: 38px;
                }
            }
            .login-btn {
                height: 40px;
                background-color: @color;
                border: none;
            }
            .notice {
                text-align: center;
                margin-top: 3px;
                color: #888;
            }
        }
        // 二维码
        .QRcode {
            display: inline-block;
            text-align: center;
            width: 314px;
            height: 100%;
            vertical-align: top;
            padding-top: 28px; 
        }
    }

</style>
