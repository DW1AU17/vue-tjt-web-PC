<template>
  <Row type="flex" class="container" justify="space-between" align="middle">
    <router-link :to="item.path" v-for="item in navList" :key="item.path">{{ item.name }}</router-link>
  </Row>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array
    }
  }
};
</script>

<style scoped lang="less">
@color: #821c21;
.container {
  height: 100%;
  a {
    color: @color;
    font-weight: 600;
    height: 24px;
    line-height: 24px;
    &:hover {
      border-bottom: 2px solid @color;
    }
  }
}
</style>
