<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px" class="login-form">
      <h2 class="login-title">管理系统</h2>
      <el-form-item label="用户名">
        <el-input v-model="form.name" @keyup.shift.50.native="show"></el-input>
        <input type="text" @keyup.shift.50="show">
      </el-form-item>   
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Vue from "vue";
import http from "@/uitls/https";
import ElementUI from "element-ui"; //element-ui的全部组件
// import "element-ui/lib/theme-chalk/index.css"; //element-ui的css
Vue.use(ElementUI); //
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },

  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus();
      },
    },
  },
  created() {
    // http.post("/user/getUserPage").then((res) => {
    //   this.data = res.data;
    //   console.log("response...", this.data);
    // });
  },

  methods: {
    onSubmit() {
      console.log("params:", this.form);
      this.$router.push("/list");
    },
    show() {
      console.log("test keydown");
    },
  },
};
</script>

<style acoped>
.login-form {
  width: 350px;
  margin: 160px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgb(255, 255, 255, 0.8); /* 透明背景色 */
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}

/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: url("../../assets/login.png"); */
}

/* 标题 */
.login-title {
  color: #303133;
  text-align: center;
}
</style> 