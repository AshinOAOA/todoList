<template>
  <div id="app">
    <TodoHeader></TodoHeader>

  </div>
</template>

<script>
import TodoHeader from "./components/todoHeader";
export default {
  name: "app",
  components: {
    TodoHeader
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
  color: #ccc;
}
</style>
