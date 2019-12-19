<template>
  <div>
    <div class="body" v-for="(item,index) in List" :key="index" v-show="item.content!=''">
       <el-row>
        <el-col :span="2">
          <el-checkbox v-model="item.done" @change="changeinp"></el-checkbox>
          <!-- <input
            type="checkbox"
            name=""
            id=""
            v-model="item.done"
            @change="changeinp"> -->
        </el-col>
        <el-col :span="20">
          <div :class="{complete:item.done ==true}">{{item.content}}</div>
        </el-col>
        <el-col :span="2">
          <i
            class="el-icon-close body-ico"
            @click="del(index)"
          ></i>
        </el-col>
      </el-row>
      <span class="time">{{item.creat_at}}</span>

    </div>
  </div>

</template>

<script>
export default {
  props: {
    List: {
      type: Array
    }
  },
  data() {
    return {
    };
  },
  methods: {
    changeinp() {
      console.log(this.List);
    },
    del(index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.List.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>
<style lang='less' scoped>
.body {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.complete {
  text-decoration: line-through;
  color: #ccc;
}
.time{
  font-size: 12px;
  color: #ccc;
}
</style>