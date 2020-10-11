<template>
  <div class="all">
    <div class="head-register">
      <span class="head-logo">F A Q 账 号 注 册</span>
      <a class="go-login">已有账号? 马上登录-></a>
    </div>
    <div class="card">
      <el-steps class="step" :space="400" :active="step" finish-status="success">
        <el-step title="验证邮箱"></el-step>
        <el-step title="填写密码"></el-step>
        <el-step title="完成注册"></el-step>
      </el-steps>
      <div class="input-email" v-show="step==0">
        <el-input placeholder="请输入邮箱" :disabled="emailInputDisable" v-model="email">
          <template slot="append">@qq.com</template>
        </el-input>
        <el-row>
          <el-col :span="18">
            <el-input placeholder="请输入收到的验证码" v-model="captcha" style="margin-top:5%"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button
              ref="sendBtn"
              :disabled="sendBtnTextDisable"
              style="margin-top:24%; margin-left:10%"
              @click="sendEmail"
            >{{sendBtnText}}</el-button>
          </el-col>
        </el-row>
        <el-button type="primary" class="next" @click="verifyEmail">下一步</el-button>
      </div>
      <div class="input-password" v-show="step==1">
        <el-input placeholder="请输入密码" show-password class="password-input" v-model="password"></el-input>
        <span class="tip-text" v-show="ps1Tip">* 密码格式不对</span>
        <el-input placeholder="请重复密码" show-password class="password-input" v-model="password2"></el-input>
        <span class="tip-text" v-show="ps2Tip">* 两次密码不一致</span>
        <el-button type="primary" class="next" @click="emailRegister">下一步</el-button>
      </div>
      <div v-show="step==2" class="over-register">
        <div>
          <span>注册成功，你的账号是:</span>
          <span class="account-text">{{account}}</span>
        </div>
        <a class="login" href="#Login">马上登录</a>
      </div>
    </div>
  </div>
</template>
<script>
import {
  captchaByEmailService,
  validationByEmailService,
  emailRegisterService,
} from "../utils/server.js";
import { verifyQQNumber, verifyPassword } from "../utils/verify.js";
export default {
  name: "EmailRegister",
  data() {
    return {
      step: 0,
      email: "",
      captcha: "",
      sendBtnText: "发送邮件",
      sendBtnTextDisable: true,
      emailInputDisable: false,
      password: "",
      password2: "",
      ps1Tip: false,
      ps2Tip: false,
      account: "8dc03ac248",
    };
  },
  methods: {
    sendEmail() {
      var _this = this;
      // 调取接口发送验证邮件
      captchaByEmailService(this.email + "@qq.com", (msg) => {
        console.log(msg);
        if (msg.status == 200) {
          console.log("succeed");
        } else {
          alert("系统出错了，请稍后重试");
        }
      });
      // 发送按钮点击后的变化
      this.emailInputDisable = true;
      this.sendBtnText = 30;
      this.sendBtnTextDisable = true;
      this.timer = setInterval(function () {
        _this.sendBtnText = _this.sendBtnText - 1;
        if (_this.sendBtnText == 0) {
          _this.sendBtnTextDisable = false;
          _this.sendBtnText = "重新发送";
          clearInterval(_this.timer);
        }
      }, 1000);
    },
    verifyEmail() {
      var _this = this;
      //验证邮箱验证码是否正确
      validationByEmailService(
        _this.email + "@qq.com",
        _this.captcha,
        (msg) => {
          console.log(msg);
          if (msg.status == 200) {
            _this.step = 1;
          } else {
            // alert("验证码错误");
          }
        }
      );
    },
    emailRegister() {
      var _this = this;
      emailRegisterService(this.email + "@qq.com", this.password, (msg) => {
        if (msg.status == 200) {
          console.log(msg);
          _this.account=msg.data.account;
          _this.step = 2;
        } else {
          alert("服务器错误，请稍后重试");
        }
      });
    },
  },
  watch: {
    email: {
      handler(newValue, oldValue) {
        if (verifyQQNumber(newValue)) {
          this.sendBtnTextDisable = false;
        } else {
          this.sendBtnTextDisable = true;
        }
      },
      deep: true,
      immediate: true,
    },
    password: {
      handler(newValue, oldValue) {
        if (verifyPassword(newValue)) {
          this.ps1Tip = false;
        } else {
          this.ps1Tip = true;
        }
      },
      deep: true,
    },
    password2: {
      handler(newValue, oldValue) {
        if (newValue == this.password) {
          this.ps1Tip = false;
        } else {
          this.ps1Tip = true;
        }
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
.all {
  background-color: whitesmoke;
  height: 100vh;
}
.go-login {
  margin-left: 60%;
}
.head-register {
  background-color: white;
  height: 80px;
}
.head-logo {
  color: aqua;
  margin-left: 10%;
  font-size: 30px;
  line-height: 70px;
}
.card {
  margin: 3% 0 0 15%;
  height: 70%;
  width: 70%;
  background-color: white;
}
.step {
  padding: 50px 0 0 22%;
}
.input-email {
  margin: 8% 30% 0 30%;
}
.next {
  margin-top: 8%;
  width: 100%;
}
.input-password {
  margin: 3% 30% 0 30%;
}
.password-input {
  margin: 2% 0 0 0;
}
.tip-text {
  margin: 0 0 0 5%;
  font-size: 14px;
  line-height: 50px;
  color: red;
}
.over-register {
  margin: 10% 0 0 30%;
}
.account-text {
  margin: 0 0 0 5%;
  color: red;
  font-size: 25px;
  letter-spacing: 2px;
}
.login{
  margin: 0 0 0 60%;
  line-height: 180px;
}
</style>