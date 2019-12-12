<template>
  <div>
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
  props:{
    List:{
      type:Array
    }
  },
      computed:{
      shengyu(){
        return this.List.filter((res)=>{
           return !res.done
        }).length
      }
    }
}

</script>
<style lang='less' scoped>
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
</style>