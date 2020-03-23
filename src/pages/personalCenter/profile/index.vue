<template>
  <div>
    <h3 class="letter-title">我的资料</h3>
    <Form :model="userForm" :label-width="80" class="person-data">
      <FormItem label="身份证">
        <Input v-model="userForm.idCard" placeholder="" />
      </FormItem>
      <FormItem label="姓名">
        <Input v-model="userForm.name" placeholder="" />
      </FormItem>
      <FormItem label="手机号">
        <Input v-model="userForm.mobile" placeholder="" />
      </FormItem>
      <FormItem label="性别">
        <Input v-model="userForm.sex" placeholder="" />
      </FormItem>
      <FormItem label="地址">
        <Input v-model="userForm.address" placeholder="" />
      </FormItem>
      <FormItem>
          <Button type="primary" @click="submit">修改资料</Button>
      </FormItem>
    </Form>
    <div class="tips">
      <p>小贴士：</p>
      <p>身份照、性别不能修改，其他资料都可以修改。有预约还没到就诊日期的情况下不能修改资料。</p>
      <p>修改的用户个人信息，信息需真实有效，与就诊病人信息一致。</p>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/utils'
export default {
  data() {
    return {
      userForm: {}
    }
  },
  created() {
    this.initUserInfo()
  },
  methods: {
    initUserInfo() {
      let res = getUserInfo()
      this.userForm = res
    },
    submit() {
      console.log('修改操作')
    }
  }
}
</script>

<style scoped lang="less">
@color: #831c20;
.person-data {
  padding: 50px 264px 0 124px;
  /deep/ input {
    color: #000;
    border: 1px solid @color;
    background: rgba(0,0,0,0);
  }
  button {
    width: 180px;
    height: 40px;
    background-color: @color;
    border: none;
  }
}
.tips {
  margin-top: 50px;
  color: #888;
  p {
    line-height: 26px;
    text-indent: 20px;
    &:first-child {
      text-indent: 0px;
    }
  }
}
</style>
