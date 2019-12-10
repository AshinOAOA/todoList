<template>
  <div id="app">
     <input type="text" v-model="name">
     <button @click="change" class="btn">提交</button>
     <div v-for="(item,index) in list" :key="index">
       {{item}}
        <span class="ico" @click="del(index)">x</span>
     </div>
  </div>
</template>

<script>

export default {
    data(){
      return{
        name:"",
        list:[]
      }
    },
    methods:{
      change(){
          this.list.push(this.name)
          this.name = ""
      },
      del(index){
        this.list.splice(index,1)
      }
    }
}
</script>

<style lang="less">
    #app{
      margin: 100px auto;
      width: 400px;
      .btn{
        width: 40px;
        height: 25px;
        font-size: 12px;
        margin-left: 5px
      }
      .ico{
        margin-left: 150px;
        color: #cccccc;
      }
    }
</style>
