<template>
    <div class="page">
        <p>收获地址</p>
        <i class="el-icon-arrow-left" @click="Return"></i>
        <p>四川省 成都市 成华区 339</p>
    </div>
</template>

<script>
export default {
    name:'Receiving',
    components:{
    },
    methods:{
        //返回上一页
        Return(){
            this.$router.go(-1)
        }
    },
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