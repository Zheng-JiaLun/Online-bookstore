<template>
    <div class="page">
        <div class="background">
            <img src="../assets/img/悟空和阿狸.jpg" alt="">
            <p class="name">悟空和阿狸</p>
        </div>
        <div class="box">
            <router-link to="./modify-information"><p>设置个人资料<i class="el-icon-arrow-right"></i></p></router-link>
             <router-link to="./receiving-address"><p>收货地址管理<i class="el-icon-arrow-right"></i></p></router-link>
        </div>
        <div class="box">
            <router-link to="./my-order"><p>我的订单<i class="el-icon-arrow-right"></i></p></router-link>
            <p>我的评价<i class="el-icon-arrow-right"></i></p>
        </div>
        <div class="box">
            <p>商品收藏<i class="el-icon-arrow-right"></i></p>
            <p>店铺收藏<i class="el-icon-arrow-right"></i></p>
        </div>
        <button type="button" @click="btn">退出登录</button>
        <Nav/>
    </div>
</template>

<script>
import Nav from '../components/nav.vue'
export default {
    name:'Personal',
    data(){
        return{
            islogin:[]
        }
    },
    components:{
        Nav
    },
    methods:{
        btn(){
          
            this.islogin.push(false);
            localStorage.loginShow = JSON.stringify(this.islogin)
             this.carPanelData.splice(0,this.carPanelData.length)
            this.$router.push({path:'mine'})
        }
    },
    computed:{
         carPanelData(){
            return this.$store.state.carPanelData
        },
    }
}
</script>

<style scoped>
    .page{
       
    }
    .background{
        width: 100%;
        height: 200px;
        background: url('../assets/img/悟空和阿狸.jpg') no-repeat center center / cover ;
        background-color: rgba(76, 149, 149, 0.376);
       
    }
    .background img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: 50px;
    }
    .name{
        margin: 10px 0;
        color: aliceblue;
    }
    .box{
        background: white;
        margin: 20px 0;
        border: 1px solid rgb(161, 161, 161);
    }
    .box a{
        text-decoration: none;
        list-style: none;
    }
    .box p:nth-child(1){
        border-bottom: 1px solid rgb(161, 161, 161);
    }
    .box p{
        font-size: 16px;
        padding-left: 10px;
        text-align: left;
        color: #333;
        height: 50px;
        line-height: 50px;
        
        margin: 0;
        position: relative;
    }
    .box p i{
        position: absolute;
        right: 20px;
        top:13px;
    }
    button{
        border-radius: 5px;
        letter-spacing: 2px;
        font-size: 20px;
        font-weight: 600;
        outline: none;
        border: none;
        background: red;
        width: 80%;
        height: 50px;
        color:white;
    }
</style>