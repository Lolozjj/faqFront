<template>
  <div>
    <div>
      <el-button @click="goCreateOrg">创建组织</el-button>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="组织编号"> </el-table-column>
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column prop="createDate" label="创建时间"> </el-table-column>
        <el-table-column label="人数">
          <template slot-scope="scope">
            {{ scope.row.num }}/{{ scope.row.max }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="dissolve(scope.row.id)">解散</el-button>
            <el-button>查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {
  getOrganizationService,
  deleteOrganizationService,
} from "@/utils/server.js";
export default {
  name: "myorg",
  data() {
    return {
      tableData: [
        {
          id: "3171104151",
          date: "2020/9/8",
          name: "财务部",
          capacity: "40/80",
        },
      ],
    };
  },
  methods: {
    goCreateOrg() {
      this.$router.push("createOrg");
    },
    dissolve(id) {
      deleteOrganizationService(id, (msg) => {
        if (msg.status == 200) {
          this.$message({
            type: "success",
            message: "删除成功",
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
  created() {
    /**获取数据 */
    getOrganizationService((msg) => {
      this.tableData = msg.data.data;
    });
  },
};
</script>