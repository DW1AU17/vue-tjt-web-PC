<template>
    <!-- 馆Crad -->
    <Row type="flex" justify="space-between" class="dep-box">
        <div class="dep-info" v-for="item in list" :key="item">
            <router-link to="/index/11">
                <img :src="require('@/assets/images/tjt.png')" alt="">
                <div class="d-title">武林馆</div>
                <Row type="flex" justify="space-between">
                    <i-col span="11">科室介绍</i-col>
                    <i-col span="11">专家介绍</i-col>
                    <i-col span="11">坐诊时间</i-col>
                    <i-col span="11">地址电话</i-col>
                </Row>
            </router-link>
        </div>
    </Row>
</template>

<script>
export default {
  props: {
    list: [Array]
  }
};
</script>

<style lang="less" scoped>
@bg-color: #9f8350;
@color: #821c21;
.dep-box {
    margin-bottom: 10px;
  .dep-info {
    width: 198px;
    height: 260px;
    border: 1px solid @bg-color;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    position: relative;
    background-color: @bg-color;
    a {
      color: #fff;
    }
    img {
      width: 100%;
    }
    .d-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 42px;
    }
    .ivu-row-flex {
      padding: 0 16px;
      .ivu-col {
        border: 1px solid #fff;
        margin-bottom: 6px;
      }
    }
    &:after {
      content: "";
      width: 186px;
      height: 248px;
      position: absolute;
      top: 5px;
      left: 5px;
      padding: 10px;
      border: 1px solid #fff;
    }
    &:hover {
      background-color: @color;
      border-color: @color;
    }
  }
}
</style>
