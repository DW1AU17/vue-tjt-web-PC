<template>
  <Row class="personal-center container">
    <i-col span="6" class="pc-left">
      <div class="p-menu">
        <div class="title fs-18 fs-fff">个人中心</div>
        <ul>
          <li>
            <router-link to="/mine" exact>我的资料</router-link>
          </li>
          <li>
            <router-link to="/mine/record">预约记录</router-link>
          </li>
          <li>
            <router-link to="/loginOut">退出登录</router-link>
          </li>
        </ul>
      </div>
    </i-col>
    <i-col span="18" class="pc-info">
      <router-view />
    </i-col>
  </Row>
</template>

<script>

export default {

};
</script>

<style scoped lang="less">
@color: #831c20;
.personal-center {
  padding: 62px 0 78px 0;
  .pc-left {
    padding-right: 44px;
    .p-menu {
      width: 198px;
      border: 1px solid @color;
      .title {
        height: 52px;
        line-height: 52px;
        background-color: @color;
        text-align: center;
      }
      ul {
        padding: 5px 26px;
        li {
          padding: 8px;
          height: 40px;
          line-height: 28px;
          border-bottom: 1px solid #afafaf;
          a {
            color: #000;
          }
          &:last-child {
            border: none;
          }
        }
      }
    }
  }
}
</style>
