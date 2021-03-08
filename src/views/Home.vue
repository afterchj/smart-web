<template>
  <div class="home">
    <p v-if="seen">现在你看到我了</p>
    <h1>This is an home page</h1>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos" :key="todo.text">{{ todo.text }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
// 引入工具类-目录自定义
import http from "@/uitls/http";

// 使用
const params = { userId: 123, token: "mes-token" }; // 参数

export default {
  data() {
    return {
      seen: true,
      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" },
      ],
    };
  },
  created() {
    console.log("request...");
    http.post("/rpc/account", params);

    // this.$axios({
    //   method: "post",
    //   url: "http://localhost:8082/rpc/account",
    //   data: {
    //     //这里是发送给后台的数据
    //     userId: 123,
    //     token: "mes-token",
    //   },
    // }).then((response) => {
    //     //这里使用了ES6的语法
    //     console.log("response", response.data); //请求成功返回的数据
    //   }).catch(function (error) {
    //     console.log("error",error);
    //   });
  },
};
</script>
<style scoped>
#app-4 {
  margin: 10px auto;
  width: 300px;
  height: 200px;
  border: 1px solid grey;
}
</style>
