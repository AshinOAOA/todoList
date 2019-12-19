<template>
  <div class="header">
    <div>
      <h1 class="tittle">云备忘录</h1>
    </div>
    <div
      class="inp"
      @keyup.enter="add"
    >
      <el-input
        v-model="name"
        placeholder="接下来要做什么？"
      ></el-input>
    </div>

    <TodoBody :List="filterList"></TodoBody>
    <TodoFooter :List="list" :query="query"></TodoFooter>
  </div>
</template>
 
<script>
import TodoBody from "./todoBody";
import TodoFooter from "./todoFooter";

const type = {
  all:1,
  finish:2,
  unFinish:3
}

export default {

  components: {
    TodoBody,
    TodoFooter
  },
  data() {
    return {
      name: "",
      list: [
        {
          content: "11",
          done: false,
          creat_at:""
        }
      ],
      query:{
        type:type.all
      },
    };
  },
  methods: {
    add() {
      // TODO：时间格式没弄好
      var nowtime = new Date()
      this.list.push({
        content: this.name,
        done: false,
        creat_at:nowtime
      });
      this.name = "";
      console.log(this.list);

    }
  },
  computed:{
    filterList(){
      if(this.query.type ===type.all){
        return this.list 
      }else if(this.query.type ===type.finish){
        return this.list.filter(v=>!v.done)
      }else if(this.query.type === type.unFinish){
        return this.list.filter(v => v.done)
      }
      return this.list
    }
  }
};
</script>
<style lang='less' scoped>
.inp {
  width: 400px;
}
.header {
  width: 400px;
  margin: 50px auto;
  .tittle {
    font-size: 80px;
    color: #ead7d7;
    text-align: center;
    font-weight: 300;
  }
}
</style>