<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#1E2123"
      style="opacity: 0.8"
      text-color="#e6e6e6"
      active-text-color="#CCCCCC"
    >
      <image src="static/image/timg.jpg"></image>
      <el-menu-item index="1" class="menu-head">首页</el-menu-item>
      <el-menu-item index="2" class="menu-tail">介绍</el-menu-item>
      <el-menu-item index="3" class="menu-tail">控制台</el-menu-item>
      <el-menu-item index="4" class="menu-tail">在线体验</el-menu-item>
      <login-menu></login-menu>
    </el-menu>
  </div>
</template>
<script>
import loginMenu from "../components/loginMenu.vue";
export default {
  name: "headerMenu",

  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    "login-menu": loginMenu,
  },
};
</script>
<style scoped>
.menu-head {
  margin-left: 25% !important;
  width: 100px;
  height: 80px;
  line-height: 4.5rem;
  text-align: center;
  font-size: 16px;
}
.menu-tail {
  width: 100px;
  text-align: center;
  line-height: 4.5rem;
  height: 80px;
  font-size: 15px;
}
</style>