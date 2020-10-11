<template>
  <div>
    <div class="all">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="logo">F A Q 用户登录</span>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="goRegister"
            >立即注册！</el-button
          >
        </div>
        <div>
          <div>
            <span class="lable">账号</span>
            <el-input
              class="input"
              v-model="account"
              placeholder="请输入内容"
            ></el-input>
          </div>
          <div>
            <span class="lable">密码</span>
            <el-input
              class="input"
              v-model="password"
              placeholder="请输入内容"
              show-password
            ></el-input>
          </div>
          <div class="imagebox">
            <span class="lable">验证码</span>
            <el-input
              style="margin-left: 1%; width: 40%; height: 50px"
              v-model="captcha"
              placeholder="请输入内容"
            ></el-input>
            <el-image :src="src" class="image" @click="getCaptcha"></el-image>
          </div>
          <div>
            <el-button type="primary" style="width: 100%" @click="sure"
              >登录</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { captcha, login } from "../utils/server.js";
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
      captcha: "",
      src: "",
      uuid: "",
    };
  },
  methods: {
    goRegister() {
      this.$router.push("EmailRegister");
    },
    //登录功能
    sure() {
      var that = this;
      login(that.account, that.password, that.uuid, that.captcha, function (
        msg
      ) {
        if (msg.status == 200) {
          //将返回的token 存入
          localStorage.setItem("token", msg.data.token);
          that.$router.push("Console");
        } else {
          that.$message(msg.data.info);
        }
      });
    },
    //获得图形验证码
    getCaptcha() {
      var that = this;
      captcha(function (msg) {
        that.src = msg.data.data.image;
        that.uuid = msg.data.data.uuid;
      });
    },
  },
  created() {
    this.getCaptcha();
  },
};
</script>

<style scoped>
.all {
  margin: 10% 40% 0 35%;
}
.logo {
  font-size: 24px;
  color: blue;
  margin-left: 30%;
}
.text {
  font-size: 14px;
}
.lable {
  margin-left: 5%;
}
.imagebox {
  position: relative;
}
.input {
  width: 75%;
  height: 50px;
  margin-left: 5%;
}
.image {
  line-height: 60px;
  position: absolute;
  right: 30px;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
