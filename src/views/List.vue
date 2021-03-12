<template>
  <div class="my-table">
    <h1>部门信息</h1>
    <table>
      <thead>
        <td>id</td>
        <td>depName</td>
        <td>createTime</td>
        <td>操作</td>
      </thead>
      <tbody>
        <tr v-for="dep in data" :key="dep.index">
          <td v-text="dep.id"></td>
          <td v-text="dep.name"></td>
          <td v-text="dep.createTime"></td>
          <td>查看</td>
        </tr>
        <!-- <td>{{ id }}</td>
        <td>{{ name }}</td>
        <td>{{ createTime }}</td>
        <td>查看</td> -->
      </tbody>
    </table>
  </div>
</template>

<script>
// 引入工具类-目录自定义
import http from "@/uitls/https";
export default {
  data() {
    return {
      code: "",
      msg: "",
      data: [],
    };
  },
  created() {
    http.get("/backmall/department/list").then((res) => {
      this.data = res.data;
      console.log("response...", this.data);
    });
  },
};
</script>

<style scoped>
div {
  margin: 0 auto;
}
table{
    margin: 0 auto;
    width: 60%;
    text-align: left;
}
</style>