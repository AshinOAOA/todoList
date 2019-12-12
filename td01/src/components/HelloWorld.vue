<template>
  <div class="header">
    <div>
      <h1 class="tittle">云备忘录</h1>
    </div>
    <div class="inp" @keyup.enter="add">
    <el-input v-model="name" placeholder="接下来要做什么？" ></el-input>
    </div>
    <div class="body" v-for="(item,index) in list" :key="index">
       <!-- <input type="checkbox" class="body-inp">
        <span class="body-text">吃饭</span>
        <i class="el-icon-close body-ico"></i> -->
        <el-row justify="start">
           <el-col :span="2"><input type="checkbox" name="" id="" v-model="item.done" @change="changeinp"></el-col>
           <el-col :span="20"><div :class="{complete:item.done ==true}">{{item.content}}</div></el-col>
           <el-col :span="2">
             <i class="el-icon-close body-ico" @click="del(index)"></i>
           </el-col>
        </el-row>
    </div>
    <div class="footer">
      <div class="num">{{shengyu}}项未完成</div>
      <div class="footer-item">
        <div class="text">
          <a href="#all">全部</a>
        </div>
        <div class="text">
          <a href="#show">未完成</a>
        </div>
        <div class="text">
          <a href="#noshow">已完成</a>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
    data(){
      return{
        name: '',
        list:[{
          content:"11",
          done:false
        }],
      }
    },
    methods:{
      add(){
        this.list.push({
          content:this.name,
          done:false
        })
        this.name=""
        console.log(this.list)
      },
      del(index){
        this.list.splice(index,1)
      },
      changeinp(){
        console.log(this.list)
      }
    },
    computed:{
      shengyu(){
        return this.list.filter((res)=>{
           return !res.done
        }).length
      }
    }
}

</script>
<style lang='less' scoped>
.inp{
  width: 400px;

}
.header{
  width: 400px;
  margin: 50px auto;
  .tittle{
    font-size: 80px;
    color: #ead7d7;
    text-align: center;
    font-weight: 300;
  }
}
.body{
  padding: 10px 0 ;
  border-bottom: 1px solid #ccc;
}
.footer{
  display: flex;
  padding: 10px 5px;
  border-bottom: 1px solid #ccc;
  .num{
    font-size:14px;
    color: #ccc;
    margin-right: 100px; 
  }
  .footer-item{
    display: flex;
    .text{
      font-size: 14px;
        padding:2px 6px;
      color: #ccc;
      margin-right: 20px;
    }
  }
}
.active{

  border: 1px solid #efd5d5;
  border-radius: 2px;
}
.complete{
  text-decoration: line-through;
  color: #ccc;
}
</style>