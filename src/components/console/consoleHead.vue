<template>
  <div class="box">
    <el-row>
      <el-col :span="3"
        ><el-button
          class="operation"
          icon="el-icon-s-operation"
          @click="openLeft"
        ></el-button>
      </el-col>
      <el-col :span="6"> <span class="logo">FAQ</span></el-col>
      <el-col :span="5">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input2"
        >
        </el-input
      ></el-col>
      <el-col :span="1">
        <span>费用</span>
      </el-col>
      <el-col :span="1">
        <span>官网</span>
      </el-col>
      <el-col :span="1">
        <span>支持</span>
      </el-col>
      <el-col :span="1">
        <span>备案</span>
      </el-col>
      <el-col :span="1">
        <span>帮助</span>
      </el-col>
      <el-col :span="1">
        <i class="el-icon-bell"></i>
      </el-col>
      <el-col :span="1">
        <i class="el-icon-shopping-cart-2"></i>
      </el-col>
      <el-col :span="1">
        <span>简体</span>
      </el-col>
      <el-col :span="1">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "consoleHead",
  data() {
    return {
      drawer: true,
      direction: "rt1",
      input2: "",
    };
  },
  methods: {
    openLeft() {},
  },
  created() {
    /*验证登录 */
    if (
      localStorage.getItem("token") == "undefined" ||
      localStorage.getItem("token") == "" ||
      localStorage.getItem("token") == null
    ) {
      this.$router.push("Login");
    }
    
  },
};
</script>
<style  scoped>
.box {
  height: 45px;
  background-color: rgb(241, 225, 225);
}
.operation {
  background-color: rgb(154, 154, 226);
  color: white;
  height: 100%;
}
.logo {
  font-size: 35px;
  color: blue;
  font-weight: 600;
  margin-left: 3%;
}
</style>