<template>
  <div class="dep-cont">
    <div class="banner"></div>
    <nav class="second-nav">
      <c-nav :navList="secondNav"/>
    </nav>
    <div class="introduce container">
      <Tabs value="name1" :animated="false" class="tab">
        <TabPane label="医馆概况" name="name1">标签一的内容</TabPane>
        <TabPane label="荣誉资质" name="name2">标签二的内容</TabPane>
        <TabPane label="科室/专家" name="name3">标签三的内容</TabPane>
        <TabPane label="预约挂号" name="name4">
          <div>
            <h3 class="letter-title">排班信息</h3>
            <Table :columns="columns" :data="data" border="" :span-method="handleSpan"></Table>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import nav from "@/components/c-nav";
let secondNav = [
  { path: "/dep/wl", name: "武林馆" },
  { path: "/dep/cx", name: "城西馆" },
  { path: "/dep/cz", name: "城战馆" },
  { path: "/dep/hx", name: "环西馆" },
  { path: "/dep/dx", name: "东新馆" }
];
let data = [
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03"
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01"
  },
  {
    name: "Joe Black",
    age: 24,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02"
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04"
  }
];
let columns = [
  {
    title: "Date",
    key: "date"
  },
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Age",
    key: "age"
  },
  {
    title: "Address",
    key: "address"
  }
];

export default {
  components: {
    "c-nav": nav
  },
  data() {
    return {
      secondNav,
      data,
      columns,
      currentIndex: 0,
      currentVal: '',
      rowArr: [1]
    };
  },
  created() {
    this.getRowArr()
  },
  methods: {
    getRowArr() {
      this.data.forEach((item, index) => {
        if (index === 0){
          this.currentVal = item.age
        } else {
          if (item.age === this.currentVal) {
            this.rowArr[this.currentIndex]++
            this.rowArr.push(0)
          } else {
            this.currentIndex = index
            this.currentVal = item.age
            this.rowArr.push(1)
          }
        }
      })
    },
    handleSpan({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex )
      if (rowIndex === 0 && columnIndex === 0){
        return [1, 1]
      } else if (rowIndex !== 0 && columnIndex === 0) {
        return {
          rowspan: this.rowArr[rowIndex],
          colspan: this.rowArr[rowIndex] ? 1 : 0
        }
      }
    }
  }
};
</script>

<style scoped lang="less">
@color: #831c20;
.dep-cont {
  .banner {
    height: 424px;
    background: url("../../assets/images/banner.jpg") center;
  }
  .second-nav {
    height: 60px;
    background-color: #9f8350;
    /deep/ a {
      color: #fff;
      &:hover {
        border-color: #fff;
      }
    }
  }
  .introduce {
    padding: 50px 0;
    /deep/ .tab {
      display: flex;
      .ivu-tabs-bar {
        width: 200px;
        border: none;
        .ivu-tabs-nav-wrap {
          margin-bottom: 0;
          .ivu-tabs-nav {
            float: none;
            .ivu-tabs-tab {
              display: block;
              border: 1px solid @color;
              text-align: center;
              font-size: 18px;
              height: 50px;
              line-height: 35px;
              color: #000;
              margin-bottom: 6px;
              margin-right: 0;
              &.ivu-tabs-tab-focused {
                color: #fff;
                background-color: @color;
              }
            }
          }
        }
        .ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {
          border: none !important;
        }
        .ivu-tabs-ink-bar {
          height: 0;
        }
      }
      .ivu-tabs-content {
        flex: 1;
        padding-left: 44px;
      }
    }
  }
}
</style>
