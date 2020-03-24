<template>
  <div class="dep-cont">
    <div class="banner"></div>
    <nav class="second-nav">
      <c-nav :navList="secondNav"/>
    </nav>
    <div class="introduce container">
      <Tabs :value="currentTab" :animated="false" class="tab" @on-click="tabClick">
        <TabPane label="医馆概况" name=" ">标签一的内容</TabPane>
        <TabPane label="荣誉资质" name="zz">标签二的内容</TabPane>
        <TabPane label="科室/专家" name="zj">标签三的内容</TabPane>
        <TabPane label="预约挂号" name="gh">
          <div>
            <h3 class="letter-title">排班信息</h3>
            <Table :columns="columns" :data="data" border="" :span-method="handleSpan" class="table">
              <template slot-scope="{ row }" slot="date">
                <Row type="flex" class="row" align="middle">
                  <i-col :span="9" class="img">
                    <img src="@/assets/images/wkg.jpg" alt="">
                  </i-col>
                  <i-col :span="15" class="info">
                    <p class="fs-14 fs-base">王坤根</p>
                    <p class="fs-12 ellipsis">国家级名中医</p>
                    <p class="fs-12 fc-666 ellipsis-3">介绍：尤以诊治{{row.age}}消化系统、心血管系统疾病以及肿瘤见长。</p>
                  </i-col>
                </Row>
              </template>
            </Table>
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
    name: "李",
    age: 18,
    noon: "上午",
    week1: "",
    week2: "",
    week3: "",
    week4: "",
    week5: "",
    week6: "",
    week7: "停诊",
  },
  {
    name: "李",
    age: 18,
    noon: "上午",
    week1: "",
    week2: "",
    week3: "",
    week4: "",
    week5: "",
    week6: "剩余8",
    week7: "",
  },
  {
    name: "王",
    age: 18,
    noon: "上午",
    week1: "",
    week2: "",
    week3: "",
    week4: "剩余10",
    week5: "",
    week6: "",
    week7: "",
  },
  {
    name: "王",
    age: 18,
    noon: "下午",
    week1: "",
    week2: "",
    week3: "已满",
    week4: "",
    week5: "",
    week6: "",
    week7: "",
  }
];
let columns = [
  {
    title: "专家 / 介绍",
    slot: "date",
    width: 210,
    align: 'center',
  },
  {
    title: " ",
    key: "noon",
    align: 'center',
  },
   {
    title: "03-24 周一",
    key: "week1",
    align: 'center',
  },
   {
    title: "03-24 周一",
    key: "week2",
    align: 'center',
  },
   {
    title: "03-24 周一",
    key: "week3",
    align: 'center',
  },
   {
    title: "03-24 周一",
    key: "week4",
    align: 'center',
  },
   {
    title: "03-24 周一",
    key: "week5",
    align: 'center',
  },
    {
    title: "03-24 周一",
    key: "week6",
    align: 'center',
  },
    {
    title: "03-24 周一",
    key: "week7",
    align: 'center',
  },
];

export default {
  components: {
    "c-nav": nav
  },

  data() {
    return {
      secondNav,
      data,              // 表格数据
      columns,           // 表格配置
      currentIndex: 0,   // 合并列: 当前项
      currentVal: '',    //         当前项值
      rowArr: [1],
      currentTab: '',    // 当前活动tab       
    };
  },
  created() {
    this.currentTab = this.$route.params.id
    this.getRowArr()
  },
  methods: {
    getRowArr() {
      this.data.forEach((item, index) => {
        if (index === 0){
          this.currentVal = item.name
        } else {
          if (item.name === this.currentVal) {
            this.rowArr[this.currentIndex]++
            this.rowArr.push(0)
          } else {
            this.currentIndex = index
            this.currentVal = item.name
            this.rowArr.push(1)
          }
        }
      })
    },
    handleSpan({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return {
          rowspan: this.rowArr[rowIndex],
          colspan: this.rowArr[rowIndex] ? 1 : 0
        }
      }
    },
    tabClick(name) {
      console.log(name)
      window.history.replaceState({}, '', `/dep/${name}`)
    }
  }
};
</script>

<style scoped lang="less">
@color: #831c20;
@c-1: #9d8680;
@c-2: #9f8350;
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
        .table {
          margin-top: 26px;
          .ivu-table,
          .ivu-table th,
          .ivu-table:before,
          .ivu-table-tbody,
          .ivu-table-row > td {
            background-color: transparent!important;
          }
          .ivu-table-border th {
            border-color:transparent;
          }
          .ivu-table-border td {
            border-color: #ccc;
          }
          thead {
            tr {
              background: #9d8680;
              color: #fff;
              .ivu-table-cell {
                padding: 0 10px;
                span {
                  font-weight: 500;
                  font-size: 14px;
                }
              }
              th {
                padding: 3px 0;
              }
            }
          }
          .row {
            margin: 10px -10px;
            .img {
              height: 90px;
              width: 60px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            /deep/ .info {
              padding-left: 10px;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>
