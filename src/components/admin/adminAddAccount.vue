<template>
  <div>
    <el-card shadow="never" class="card">
      <span class="title">添加管理员账号</span>
      <el-row class="row">
        <el-col :span="3">
          <span class="lable">用户名:</span>
        </el-col>
        <el-col :span="9">
          <el-input class="input" v-model="username"></el-input>
        </el-col>
        <el-col :span="3">
          <span class="lable">邮箱:</span>
        </el-col>
        <el-col :span="9">
          <el-input class="input" v-model="email"></el-input>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="3">
          <span class="lable">手机:</span>
        </el-col>
        <el-col :span="9">
          <el-input class="input" v-model="phone"></el-input>
        </el-col>
        <el-col :span="3">
          <span class="lable">密码:</span>
        </el-col>
        <el-col :span="9">
          <el-input class="input" v-model="password"></el-input>
        </el-col>
      </el-row>
      <el-button class="add-button" type="primary" @click="add"><span style="font-weight:500">确认添加</span></el-button>
    </el-card>
  </div>
</template>
<script>
import { addlAdminUsersService } from "@/utils/server.js";
export default {
  name: "adminAddAccount",
  data() {
    return {
      username: "",
      email: "",
      phone: "",
      password: "",
    };
  },
  methods: {
    add() {
      addlAdminUsersService(
        this.username,
        this.email,
        this.phone,
        this.password,
        (msg)=>{
          if(msg.status=200){
            this.$message('添加成功');
          }else{
            this.$message('系统故障，稍后再试');
          }
        }
      );
    },
  },
};
</script>
<style scoped>
.title {
  margin-left: 40%;
  font-size: 20px;
  color: rgb(116, 112, 112);
  
  font-weight: 700;
}
.card {
  margin: 5% 25% 0 25%;
}
.row {
  margin: 5% 0 0 2%;
}
.lable {
  margin-left: 8%;
  line-height: 40px;
  margin-right: 2%;
  color: rgb(116, 112, 112);
  font-weight: 700;
}
.input {
  width: 170px;
}
.add-button {
  margin: 5% 0 0 10%;
  width: 80%;
}
</style>