<template>
  <div>
    <el-row>
      <el-col :span="16">
        <el-input
          placeholder="请入组织号或名称搜索"
          v-model="search"
        ></el-input>
      </el-col>
      <el-col :span="8">
        <el-button @click="beginSearch">开始搜索</el-button>
      </el-col>
    </el-row>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="组织编号"> </el-table-column>
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column prop="creator.username" label="创建者">
        </el-table-column>
        <el-table-column label="人数">
          <template slot-scope="scope">
            {{ scope.row.num }}/{{ scope.row.max }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button>查看</el-button>
            <el-button @click="join(scope.row.id)">加入</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {
  searchOrganizationService,
  joinOrganizationService,
} from "@/utils/server.js";
export default {
  name: "joinOrg2",
  data() {
    return {
      search: "",
      tableData: [],
    };
  },
  methods: {
    beginSearch() {
      searchOrganizationService(this.search, (msg) => {
        console.log(msg);
        if ((msg.status = 200)) {
          this.tableData = msg.data.result;
        } else {
          this.$message({
            type: "fail",
            message: msg.data.info,
          });
        }
      });
    },
    join(id) {
      joinOrganizationService(id, (msg) => {
          console.log(msg);
        if (msg.status == 200) {
          this.$message({
            type: "succees",
            message: "加入成功",
          });
        } else {
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
<style scoped>
</style>