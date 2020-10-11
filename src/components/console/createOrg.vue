<template>
  <div>
    <el-row>
      <el-col :span="2">
        <span>* 组织名称:</span>
      </el-col>
      <el-col :span="4">
        <el-input v-model="name"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <span>* 组织简介:</span>
      </el-col>
      <el-col :span="4">
        <el-input v-model="describe"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <span>* 组织地址:</span>
      </el-col>
      <el-col :span="4">
        <el-input v-model="address"></el-input>
      </el-col>
    </el-row>
    <el-button @click="sure">确认</el-button>
  </div>
</template>
<script>
import { addOrganizationService } from "@/utils/server.js";
export default {
  name: "createOrg",
  data() {
    return {
      name: "",
      describe: "",
      address: "",
    };
  },
  methods: {
    sure() {
      addOrganizationService(this.name, this.describe, this.address, (msg) => {
        if (msg.status == 200) {
          this.$message({
            type: "success",
            message: "创建成功",
          });
        }else{
          this.$message({
            type: "fail",
            message: msg.data.info,
          });
        }
      });
    },
  },
};
</script>