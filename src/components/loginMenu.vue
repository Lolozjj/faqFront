<template>
  <div>
    <div class="login" v-show="!isLogin">
      <a href="/Login" class="menu-login">登录</a>
    </div>
    <div class="no-login" v-show="isLogin">
      <el-avatar
        class="menu-head-image"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    <span class="name-text">{{username}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "loginMenu",
  data() {
    return {
      isLogin: false,
      username: "阿呆",
    };
  },
};
</script>
<style scoped>
.menu-head-image {
  line-height: 4.5rem;
  margin-left: 40%;
  margin-top: 1%;
}
.menu-login {
  line-height: 4.5rem;
  margin-left: 40%;
}
.name-text{
    color: aliceblue;
    font-size: 13px;
}
</style>