<template>
  <div>
    <el-button @click="goJoinOrg2">加入组织</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="组织编号"> </el-table-column>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="creator.username" label="创建者"> </el-table-column>
      <el-table-column label="人数">
        <template slot-scope="scope">
          {{ scope.row.num }}/{{ scope.row.max }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button>查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {getWithOrganizationJoinService} from "@/utils/server.js"
export default {
  name: "joinOrg",
  data() {
    return {
        tableData:[]
    };
  },
  methods: {
      goJoinOrg2(){
          this.$router.push("joinOrg2");
      }
  },
  created(){
    getWithOrganizationJoinService((msg)=>{
      if(msg.status==200){
        this.tableData=msg.data.result;
      }else{
        this.$message({
            type: "fail",
            message: "数据获取失败，稍后再试",
          });
      }
    });
  }
};
</script>
<style scoped>
</style>