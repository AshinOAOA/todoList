<template>
  <div class="header">
    <div>
      <h1 class="tittle">云备忘录</h1>
    </div>
    <div class="inp">
    <el-input v-model="input" placeholder="接下来要做什么？"></el-input>
    </div>
    <div class="body">
       <!-- <input type="checkbox" class="body-inp">
        <span class="body-text">吃饭</span>
        <i class="el-icon-close body-ico"></i> -->
        <el-row justify="start">
           <el-col :span="2"><input type="checkbox" name="" id=""></el-col>
           <el-col :span="20"><div>chifan</div></el-col>
           <el-col :span="2"><i class="el-icon-close body-ico"></i></el-col>
        </el-row>
    </div>
    <div class="footer">
      <div class="num">2项未完成</div>
      <div class="footer-item">
        <div class="text f-border">全部</div>
        <div class="text">未完成</div>
        <div class="text">已完成</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        input: '',
        radio:'',
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
      color: #ccc;
      margin-right: 20px;
    }
  }
}
.f-border{
  padding:2px 6px;
  border: 1px solid #efd5d5;
  border-radius: 2px;
}
</style>