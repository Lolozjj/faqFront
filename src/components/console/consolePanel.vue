<template>
  <div class="box">
    <div class="date">
      <el-row>
        <el-col :span="12">
          <span class="today">今日，</span>
          <div>
            <span>{{ nowDate }},</span> <span> 欢迎您回到FAQ控制台。</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div>待续费</div>
        </el-col>
        <el-col :span="3">
          <div>待支付</div>
        </el-col>
        <el-col :span="3">
          <div>待处理</div>
        </el-col>
      </el-row>
    </div>
    <div class="cost">
      <el-row>
        <el-col :span="10">
          <el-card class="card" shadow="never" header="最近消费">
            本月最近消费 1000.00 $
          </el-card>
          <el-card class="card" shadow="never" header="最近使用">
            产品体验、搭建网站，SDK接入
          </el-card>
        </el-col>
        <el-col :span="14">
          <el-card class="right-card" shadow="never" header="费用-概览">
            <div>余额：200.00 <el-button>充值</el-button></div>
            <el-row>
              <el-col :span="8"> 优惠卷：0 </el-col>
              <el-col :span="8"> 资源包: 0 </el-col>
              <el-col :span="8"> 带续费; 0 </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "consolePanel",
  data() {
    return {
      nowDate: "",
    };
  },
  methods: {},
  created() {
    var d = new Date();
    var dateDigitToString = function (num) {
      return num < 10 ? "0" + num : num;
    };
    this.nowDate =
      dateDigitToString(d.getFullYear()) +
      "年" +
      dateDigitToString(d.getMonth() + 1) +
      "月" +
      dateDigitToString(d.getDate()) +
      "日" +
      " " +
      dateDigitToString(d.getHours()) +
      ":" +
      dateDigitToString(d.getMinutes()) +
      ":" +
      dateDigitToString(d.getSeconds());
  },
};
</script>
<style scoped>
.box {
  background-color: rgb(245, 239, 239);
}
.today {
  font-size: 26px;
  font-weight: 600;
}
.date {
  margin: 2% 0 0 5%;
}
.cost {
  margin-top: 2%;
  padding: 1% 1% 1% 1%;
}
.card {
  margin-top: 2%;
}
.right-card {
  margin-left: 2%;
  margin-top: 2%;
}
</style>