<template>
<div>
     <div class="body" v-for="(item,index) in List" :key="index">
        <el-row>
           <el-col :span="2"><input type="checkbox" name="" id="" v-model="item.done" @change="changeinp"></el-col>
           <el-col :span="20"><div :class="{complete:item.done ==true}">{{item.content}}</div></el-col>
           <el-col :span="2">
             <i class="el-icon-close body-ico" @click="del(index)"></i>
           </el-col>
        </el-row>
    </div>
</div>

</template>

<script>
export default {
  props:{
    List:{
      type:Array
    }
  },
  methods:{
      changeinp(){
        console.log(this.List)
      },
      del(index){
        this.List.splice(index,1)
      }

  }
}

</script>
<style lang='less' scoped>
  .body{
  padding: 10px 0 ;
  border-bottom: 1px solid #ccc;
}
.complete{
  text-decoration: line-through;
  color: #ccc;
}
</style>