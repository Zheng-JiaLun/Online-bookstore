<template>
    <div class="page">
         <i class="el-icon-arrow-left" @click="Return"></i>
         <h3>未支付订单</h3>
        <div class="order-box">
            <div class="order-content" v-for="(item,index) in order" :key="index">
                <span class="name">{{item.name}}</span><span class="price">单价:{{item.price}}元</span><span class="count">{{item.count}}本</span>
            </div>
        </div>
         <button type="button" class="button">点击支付</button>
    </div>
   
    
</template>

<script>
export default {
    name:'Order',
    data(){
        return{
            
        }
    },
    methods:{
        Return(){
        this.$router.go(-1)
        },
    },
    computed:{
        carPanelData(){
            return this.$store.state.carPanelData
        },
        order(){
            return JSON.parse(localStorage.order)
        }
    }
}
</script>

<style scoped>
    .order-box{
        background: rgb(246, 246, 246);
        border: 1px solid rgb(185, 185, 185);
        font-size: 15px;
    }
    .order-content:not(:last-child) {
        border-bottom: 1px solid #333;
       
    }
    /* .order-content::after{
        content: '';
        display: table;
        height: 30px;
    } */
    .name{
        padding: 5px 5px;
        text-align: left;
        float: left;
        width: 150px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .price{
        display: inline-block;
        font-size: 13px;
        color: red;
        padding: 8px 0;
    }
    .count{
        display: inline-block;
        padding: 5px 5px;
        float: right;
    }
    .button{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        border: none;
        outline: none;
        
    }
    .el-icon-arrow-left{
    position: fixed;
    top:10px;
    left: 10px;
    z-index: 2;
    font-size: 36px;
    color: white;
}
</style>
