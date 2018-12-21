<template>
    <div class="page">
        <p>个人资料修改</p>
        <i class="el-icon-arrow-left" @click="Return"></i>
    </div>
</template>

<script>
export default {
    name:'Modify',
    components:{
    },
    methods:{
            //返回上一页
        Return(){
        this.$router.go(-1)
        },
    }
}
</script>

<style scoped>
    .el-icon-arrow-left{
        font-size: 25px;
        position: fixed;
        top: 10px;
        left: 10px;
        color: white;
        z-index: 2;
    }
</style>