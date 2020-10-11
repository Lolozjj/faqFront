<template>
    <div>
        <console-head></console-head>
        <el-row>
            <el-col :span="3">
                <console-left></console-left>
            </el-col>
            <el-col :span="21" style="background-color: rgb(245, 239, 239);">
                <router-view ></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import consoleHead from "../components/console/consoleHead.vue"
import consoleLeft from "../components/console/consoleLeft.vue"
export default {
    name:"Console",
    data(){
        return{

        }
    },
    methods:{

    },
    created(){

    },
    components:{
        "console-head":consoleHead,
        "console-left":consoleLeft,
    }
}
</script>
<style  scoped>

</style>