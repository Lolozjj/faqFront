<template>
  <el-menu :default-openeds="['1', '2', '3']">
    <router-link class="router" to="adminPanel"
      ><el-menu-item index="0"
        ><i class="el-icon-s-home"></i>首页</el-menu-item
      ></router-link
    >
    <el-submenu index="1">
      <template slot="title"> <i class="el-icon-user"></i>用户管理 </template>
      <el-menu-item-group>
        <template slot="title">管理员账号管理</template>
        <router-link to="adminAccount" class="router"
          ><el-menu-item index="AdminAccount"
            >账号一览</el-menu-item
          ></router-link
        >
        <router-link to="adminAddAccount" class="router"
          ><el-menu-item index="adminAddAccount"
            >新建账号</el-menu-item
          ></router-link
        >
      </el-menu-item-group>
      <el-menu-item-group title="普通用户账号管理">
        <el-menu-item index="1-3">用户管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"> <i class="el-icon-menu"></i>组织管理 </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-setting"></i>数据统计
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-4">
        <template slot="title">选项4</template>
        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: "adminLeftMenu",
  data() {
    return {};
  },
};
</script>
<style scoped>
.router {
  color: black;
  text-decoration: none;
}
.left-menu-div {
  height: 100vh;
  width: 100%;
}
.left-menu {
  height: 100vh;
  /* overflow: scroll; */
}
</style>