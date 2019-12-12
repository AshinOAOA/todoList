<template>
  <div id="app">
    <Hellowworld></Hellowworld>

  </div>
</template>

<script>
  import Hellowworld from "./components/HelloWorld"
export default {
  name:'app',
  components:{
    Hellowworld
  }
}
</script>

<style lang="less">
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
