<template>
  <div>
    <el-menu>
      <router-link class="router" to="consolePanel"
        ><el-menu-item index="0"
          ><i class="el-icon-s-home"></i>首页</el-menu-item
        ></router-link
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">产品体验</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">在线体验</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">组织管理</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <router-link class="router" to="myorg">
            <el-menu-item index="2-1"> 我的组织 </el-menu-item>
          </router-link>
          <router-link class="router" to="joinOrg">
            <el-menu-item index="2-2"> 我加入的组织 </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">购买产品</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">网站搭建</el-menu-item>
          <el-menu-item index="1-1">SDK购买</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "consoleLeft",
  data() {
    return {};
  },
};
</script>
<style  scoped>
.router {
  color: black;
  text-decoration: none;
}
</style>