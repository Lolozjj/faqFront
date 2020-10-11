<template>
  <el-container class="admin-container">
    <el-aside width="200px" class="left-menu">
      <admin-left-menu></admin-left-menu>
    </el-aside>

    <el-container>
      <el-header >
        <admin-head-menu></admin-head-menu>
      </el-header>
      <el-main>
        <router-view ></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
import adminHeadMenu from "../components/admin/adminHeadMenu";
import adminLeftMenu from "../components/admin/adminLeftMenu";
import adminPanel from "../components/admin/adminPanel";
export default {
  name: "Admin",
  data() {
    return {};
  },
  components: {
    "admin-head-menu": adminHeadMenu,
    "admin-left-menu": adminLeftMenu,
    "admin-panel": adminPanel,
  },
};
</script>

<style scoped>
.admin-container {
  height: 100%;
  border: 1px solid #eee;
}
.left-menu {
  background-color: rgb(238, 241, 246);
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #b92424;
}
</style>
