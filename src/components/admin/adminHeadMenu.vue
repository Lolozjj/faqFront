<template>
  <div class="head-menu">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <!-- <el-popconfirm title="这是一段内容确定删除吗？"> -->
          <el-dropdown-item ><span @click="logout">注销</span></el-dropdown-item>
        <!-- </el-popconfirm> -->
      </el-dropdown-menu>
    </el-dropdown>
    <span v-html="username"></span>
  </div>
</template>
<script>
import { getAdminUsernameService } from "@/utils/server.js";
export default {
  name: "adminHeadMenu",
  data() {
    return {
      searchData: "",
      username: "佚名",
    };
  },
  methods: {
    logout() {
      console.log(1);
      localStorage.removeItem("token");
      this.$router.push("Login");
    },
  },
  created() {
    /**检查是否有登录 */
    if (
      localStorage.getItem("token") == "undefined" ||
      localStorage.getItem("token") == ""||
      localStorage.getItem("token") == null
    ) {
      this.$router.push("AdminLogin");
    }
    /**获取用户名 */
    getAdminUsernameService((msg) => {
      if (msg.status == 200) {
        this.username = msg.data.username;
      } else {
        this.$message("请先登录");
      }
    });
  },
};
</script>
<style scoped>
.head-menu {
  text-align: right;
  font-size: 12px;
}
</style>