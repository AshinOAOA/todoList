<template>
  <div>
    <div class="footer">
       <!-- TODO  无法设置v-if -->
      <div class="num">{{shengyu-1}}项未完成</div>
      <div class="footer-item">
        <div class="text">
          <el-button size="mini" @click="query.type = type.all">全部</el-button>
        </div>
        <div class="text">
          <el-button size="mini" @click="query.type = type.unFinish">未完成</el-button>
        </div>
        <div class="text">
          <el-button size="mini"  @click="query.type = type.finish">已完成</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const type = {
  all:1,
  finish:2,
  unFinish:3
}
export default {
  props: {
    List: {
      type: Array
    },
    query:{
      type:Object
    }
  },
  data() {
    return {
      type
    }
  },
  computed: {
    shengyu() {
      return this.List.filter(res => {
        return !res.done;
      }).length;
    }
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.footer {
  display: flex;
  padding: 0px 5px;
  border-bottom: 1px solid #ccc;
  .num {
    font-size: 14px;
    color: #ccc;
    margin-right: 100px;
    line-height: 49px;
  }
  .footer-item {
    display: flex;
    .text {
      font-size: 14px;
      color: #ccc;
      margin-right: 10px;
      padding: 10px 0;
    }
  }
}
.active {
  border: 1px solid #efd5d5;
  border-radius: 2px;
}
</style>