<template>
    <div class="page">
        
        <div class="address">
            <p>收货地址</p>
            <p>四川省 成都市 成华区 339</p>
            <p>更换收货地址</p> 
        </div>
         <i class="el-icon-arrow-left" @click="Return"></i>
         <div class="pay-num" v-for="(item ,index) in settlement" :key="index">
            <img :src="item.cover" alt="">
            <div class="books-con">
                <p class="author"> <span>作者:</span>{{item.author}}</p>
                <p class="price"><span>单价:</span>￥{{item.price}}</p>
                <p class="publisDate"> <span>出版日期:</span>{{item.date}}</p>
            </div>
            <div class="right-price">
                <p  class="prices">总价:{{item.price * item.count | addSymbols}}元</p>
                <p>数量:{{item.count}}本</p>
            </div>
         </div>
       <div class="cost">
           <span>运费: ￥10</span> <span>支付费用:{{10 + totle | addSymbols}}</span>
           <p>支付方式</p>
           <div class="pay">
               <img src="../assets/img/银行卡.png" alt="">
               <span>网银支付</span>
           </div>
           <div  class="pay">
               <img src="../assets/img/支付宝 .png" alt="">
               <span>支付宝支付</span>
           </div>
           <div class="pay">
               <img src="../assets/img/微信.png" alt="">
               <span>微信支付</span>
           </div>
           <div class="pay">
               <img src="../assets/img/钱包.png" alt="">
               <span>书城钱包支付</span>
           </div>
       </div>
         
    </div>
</template>

<script>
export default {
    name:'Settlement',
    data(){
        return{
            settlement:[]
        }
    },
    components:{
    },
    methods:{
        //返回上一页
        Return(){
        this.$router.go(-1)
        }
    },
    created(){
       JSON.parse(sessionStorage.pay).forEach(element => {
           this.$data.settlement.push(element)
       });
    },
    computed:{
         totle(){
            return this.$store.getters.totlePrice
        }
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
    .prices{
        color: red;
    }
    .pay-num{
        margin-top: 10px;
        width: 100%;
        height: 120px;
        font-size: 15px;
        border-bottom: 1px solid rgb(194, 52, 52);
    }
    .pay-num p{
        margin:5px 0;
    }
    .pay-num img{
        margin-left: 10px;
        height: 100px;
        float: left;
    }
    .books-con{
         height: 100%;
        float: left;
        width: 40%;
    }
    .books-con span{
        width: 70px;
        float: left;
        text-align: left;
    }
    .right-price{
        line-height: 40px;
        height: 100%;
        width: 30%;
        float: right;
    }
    .cost{
        margin-top: 20px;
    }
     .cost > p{
         text-align: left;
         padding-left: 10px;
     }
    .pay{
        height: 70px;
        margin: 10px 10px;
        border: 1px solid rgb(110, 110, 110);
        border-radius: 5px;
    }
    .pay img{
        margin-top: 10px;
        margin-left: 10px;
        width: 50px;
        height: 50px;
        float: left;
    }
    .pay span{
        line-height: 70px;
    }
</style>