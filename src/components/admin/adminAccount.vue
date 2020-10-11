<template>
  <div>
    <el-table :data="displayData">
      <el-table-column label="账号" align="center">
        <template slot="header" slot-scope="scope">
          <el-input
            v-if="isSearchAccount"
            v-model="searchAccount"
            size="mini"
            placeholder="输入关键字搜"
            class="search-input"
            clearable
          ></el-input>
          <div v-else>
            <el-tooltip
              class="item"
              effect="dark"
              content="点击搜索"
              placement="top"
            >
              <i
                class="el-icon-search search-icon"
                @click="displayAccountInput"
              ></i>
            </el-tooltip>
            <span>账号</span>
          </div>
        </template>
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" type="danger">{{ scope.row.account }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="用户名" align="center">
        <template slot="header" slot-scope="scope">
          <el-input
            v-if="isSearchUsername"
            v-model="searchUsername"
            size="mini"
            placeholder="输入关键字搜"
            class="search-input"
            clearable
          ></el-input>
          <div v-else>
            <el-tooltip
              class="item"
              effect="dark"
              content="点击搜索"
              placement="top"
            >
              <i
                class="el-icon-search search-icon"
                @click="displayUsernameInput"
              ></i>
            </el-tooltip>
            <span>用户名</span>
          </div>
        </template>
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-input
              v-show="scope.row.account == editAccount"
              placeholder="请输入内容"
              size="mini"
              class="edit-input"
              v-model="editUsername"
              clearable
            ></el-input>
            <el-tag v-show="scope.row.account != editAccount" size="medium">{{
              scope.row.username
            }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" align="center">
        <template slot="header" slot-scope="scope">
          <el-input
            v-if="isSearchEmail"
            v-model="searchEmail"
            size="mini"
            placeholder="输入关键字搜"
            class="search-input"
            clearable
          ></el-input>
          <div v-else>
            <el-tooltip
              class="item"
              effect="dark"
              content="点击搜索"
              placement="top"
            >
              <i
                class="el-icon-search search-icon"
                @click="displayEmailInput"
              ></i>
            </el-tooltip>
            <span>邮箱</span>
          </div>
        </template>
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-input
              v-show="scope.row.account == editAccount"
              placeholder="请输入内容"
              size="mini"
              class="edit-input"
              v-model="editEmail"
              clearable
            ></el-input>
            <el-tag
              v-show="scope.row.account != editAccount"
              type="info"
              size="medium"
              >{{ scope.row.email }}</el-tag
            >
          </div>
        </template>
      </el-table-column>
      <el-table-column label="手机" align="center">
        <template slot="header" slot-scope="scope">
          <el-input
            v-if="isSearchPhone"
            v-model="searchPhone"
            size="mini"
            placeholder="输入关键字搜"
            class="search-input"
            clearable
          ></el-input>
          <div v-else>
            <el-tooltip
              class="item"
              effect="dark"
              content="点击搜索"
              placement="top"
            >
              <i
                class="el-icon-search search-icon"
                @click="displayPhoneInput"
              ></i>
            </el-tooltip>
            <span>手机</span>
          </div>
        </template>
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-input
              v-show="scope.row.account == editAccount"
              placeholder="请输入内容"
              size="mini"
              class="edit-input"
              v-model="editPhone"
              clearable
            ></el-input>
            <el-tag
              v-show="scope.row.account != editAccount"
              type="warning"
              size="medium"
              >{{ scope.row.phone }}</el-tag
            >
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template slot="header" slot-scope="scope">
          <div v-if="havaSearchInput">
            <span>范围:</span>
            <el-radio-group v-model="radio" size="mini">
              <el-radio-button label="全库"></el-radio-button>
              <el-radio-button label="当前"></el-radio-button>
            </el-radio-group>
          </div>
          <div v-else>
            <span>状态</span>
          </div>
        </template>

        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag type="success" size="medium">管理员</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot="header" slot-scope="scope">
          <el-button size="mini" v-if="havaSearchInput" @click="cancleSearch"
            >取消搜索</el-button
          >
          <div v-else>
            <span>操作</span>
          </div>
        </template>
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-button-group v-show="scope.row.account == editAccount">
              <el-button size="mini" @click="sureEdit(scope.$index)"
                >确认</el-button
              >
              <el-button size="mini" @click="cancelEdit">取消</el-button>
            </el-button-group>

            <el-button-group v-show="scope.row.account != editAccount">
              <el-tooltip
                class="item"
                effect="dark"
                content="编辑"
                placement="top-start"
              >
                <el-button
                  plain
                  size="mini"
                  icon="el-icon-edit"
                  @click="edit(scope.row)"
                ></el-button>
              </el-tooltip>
              <el-tooltip
                class="item"
                effect="dark"
                content="密码重置"
                placement="top-start"
              >
                <el-button
                  plain
                  size="mini"
                  icon="el-icon-refresh-left"
                  @click="resetPassword(scope.row.account)"
                ></el-button>
              </el-tooltip>
              <el-tooltip
                class="item"
                effect="dark"
                content="删除"
                placement="top-start"
              >
                <el-button
                  plain
                  size="mini"
                  icon="el-icon-delete"
                  @click="remove(scope.$index)"
                ></el-button>
              </el-tooltip>
            </el-button-group>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      type="primary"
      @click="getTableData"
      class="add-button"
      icon="el-icon-circle-plus-outline"
    ></el-button>
  </div>
</template>
<script>
import {
  getAllAdminUsersService,
  updateAdminUserService,
  resetAdminPasswordService,
  deleteAdminUserService,
  fuzzyQueryAdminUserService,
} from "@/utils/server.js";
export default {
  name: "adminAccount",
  data() {
    return {
      tableData: [],
      searchData: [],
      displayData: [],
      preData: "",
      totalSum: 0,
      pageSize: 10,
      curPage: 1,
      editAccount: "",
      editUsername: "",
      editEmail: "",
      editPhone: "",
      searchAccount: "",
      searchUsername: "",
      searchEmail: "",
      searchPhone: "",
      havaSearchInput: false,
      isSearchAccount: false,
      isSearchUsername: false,
      isSearchEmail: false,
      isSearchPhone: false,
      radio: "当前",
    };
  },
  methods: {
    getTableData() {
      getAllAdminUsersService(this.curPage, this.pageSize, (msg) => {
        if (msg.data.adminUser.list[0].account != this.preData) {
          this.tableData = this.tableData.concat(msg.data.adminUser.list);
          this.curPage++;
          this.preData = msg.data.adminUser.list[0].account;
          this.displayData = this.tableData;
          this.displayData = this.tableData;
        } else {
          this.$message("没有更多数据了");
        }
      });
    },
    edit(row) {
      this.editAccount = row.account;
      this.editUsername = row.username;
      this.editEmail = row.email;
      this.editPhone = row.phone;
    },
    sureEdit(index) {
      updateAdminUserService(
        this.editAccount,
        this.editEmail,
        this.editPhone,
        this.editUsername,
        (msg) => {
          if (msg.status == 200) {
            this.$message("修改成功");
            this.editAccount = "";
            this.tableData[index].username = this.editUsername;
            this.tableData[index].email = this.editEmail;
            this.tableData[index].phone = this.editPhone;
          } else {
            this.$message("修改失败请稍后重试");
          }
        }
      );
    },
    cancelEdit() {
      this.editAccount = "";
    },
    resetPassword(account) {
      this.$prompt("请输入密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          resetAdminPasswordService(account, value, (msg) => {
            if (msg.status == 200) {
              this.$message({
                type: "success",
                message: "你的新密码是: " + value,
              });
            } else {
              this.$message({
                type: "fail",
                message: "系统出错，请稍后重试",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    remove(index) {
      deleteAdminUserService(this.tableData[index].account, (msg) => {
        if (msg.status == 200) {
          this.$message("删除成功");
          this.tableData.splice(index, 1);
        } else {
          this.$message("系统错误，请稍后重试");
        }
      });
    },
    displayAccountInput() {
      this.isSearchAccount = true;
      this.havaSearchInput = true;
    },
    displayEmailInput() {
      this.isSearchEmail = true;
      this.havaSearchInput = true;
    },
    displayPhoneInput() {
      this.isSearchPhone = true;
      this.havaSearchInput = true;
    },
    displayUsernameInput() {
      this.isSearchUsername = true;
      this.havaSearchInput = true;
    },
    cancleSearch() {
      this.havaSearchInput = false;
      this.isSearchUsername = false;
      this.isSearchEmail = false;
      this.isSearchAccount = false;
      this.isSearchPhone = false;
      this.searchAccount="";
      this.searchUsername="";
      this.searchEmail="";
      this.searchPhone="";
      this.displayData=this.tableData;
    },
    search() {
      if (this.radio == "当前") {
        for(var i=0;i<this.tableData.length;i++){
          if(this.tableData[i].account.indexOf(this.searchAccount)!=-1&&
             this.tableData[i].username.indexOf(this.searchUsername)!=-1&&
             this.tableData[i].email.indexOf(this.searchEmail)!=-1&&
             this.tableData[i].phone.indexOf(this.searchPhone)!=-1){
              this.searchData.push(this.tableData[i]);
          }
        }
        this.displayData=this.searchData;
      } else {
        this.searchData=[];
        fuzzyQueryAdminUserService(this.searchAccount,this.searchUsername,this.searchEmail,this.searchPhone,(msg)=>{
          console.log(msg);
          if(msg.status==200){
            this.searchData=msg.data.result;
          }else{
            this.$message("系统错误，请稍后重试");
          }
          this.displayData=this.searchData;
        });
      }
    },
  },
  watch: {
    searchAccount: {
      handler(newValue, oldValue) {
        this.search();
      },
      deep: true,
    },
    searchUsername: {
      handler(newValue, oldValue) {
        this.search();
      },
      deep: true,
    },
    searchEmail: {
      handler(newValue, oldValue) {
        this.search();
      },
      deep: true,
    },
    searchPhone: {
      handler(newValue, oldValue) {
        this.search();
      },
      deep: true,
    },
  },
  created() {
    this.getTableData();
  },
};
</script>
<style scoped>
.pagination {
  margin: 5% 0 0 25%;
}
.add-button {
  margin: 4% 0 0 0;
  width: 100%;
}
.edit-input {
  width: 70%;
}
.search-input {
  width: 70%;
}
.search-icon:hover {
  cursor: pointer;
}
</style>