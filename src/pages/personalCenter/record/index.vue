<template>
  <div>
    <h3 class="letter-title">预约记录</h3>
    <Table :show-header="false" :columns="columns12" :data="data" class="table">
      <template slot-scope="{ row }" slot="name">
        <Row type="flex" class="doc" align="middle">
          <i-col :span="12" class="img">
            <img src="@/assets/images/wkg.jpg" alt="">
          </i-col>
          <i-col :span="12" class="info">
            <p>分馆: <span class="fs-base">桐君堂(东新馆)</span></p>
            <p>科室: <span class="fs-base">{{ row.name }}</span></p>
            <p>医师: <span class="fs-base">朱平</span></p>
            <p>挂号费: 15元</p>
          </i-col>
        </Row>
      </template>
      <template slot-scope="{ row, index }" slot="address">
        <p>时间: 2020年3月23日 12:15:36</p>
        <p>序号: {{ index }}</p>
        <p>状态: <span class="fs-base">成功</span></p>
        <p>区号: 15元</p>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <c-button @click.native="cancel(index)">取消</c-button>
      </template>
    </Table>
    <Page :total="100" show-elevator class="page" />
  </div>
</template>

<script>
import Button from '@/components/c-button'
let data = [
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park"
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park"
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park"
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park"
  }
];
export default {
  components: {
    'c-button': Button
  },
  data() {
    return {
      columns12: [
        {
          slot: "name",
          width: 350
        },
        {
          slot: "address",
          width: 300
        },
        {
          slot: "action",
          align: "center"
        }
      ],
      data
    };
  },
  methods: {
    cancel() {
      console.log(1234)
    },
  }
};
</script>

<style scoped lang="less">
@color: #831c20;
/deep/ .table {
  p {
    color: #000;
    span {
      margin-left: 5px;
    }
  }
  .ivu-table,
  .ivu-table:before,
  .ivu-table-tbody,
  .ivu-table-row > td {
    background-color: transparent;
  }
  .ivu-table {
    margin-bottom: 20px;
    .ivu-table-row {
      & > td {
        border-bottom: 2px solid #ccc;
      }
      .ivu-table-cell {
        padding: 18px 0;
      }
      .doc {
        .img {
          border: 1px solid @color;
          width: 70px;
          height: 98px;
          overflow: hidden;
          margin-right: 15px;
          img {
            width: 100%;
          }
        }
        .info {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
}
/deep/ .page {
  text-align: end;
  li, input {
    height: 28px;
    line-height: 28px;
    background-color: transparent;
    border-color: #9d8680; 
    &:hover a {
      color: #000;
    }
  }
  .ivu-page-item-active {
    background-color: #9d8680; 
    a {
      color: #fff;
    }
  }
}
</style>
