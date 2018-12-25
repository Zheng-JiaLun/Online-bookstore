<template>
    <div class="page">
        <Nav/>
       
        <div class="block">
            <span class="demonstration"></span>
            <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in  imgList" :key="item">
                <img :src="item" alt="顶部轮播图">
            </el-carousel-item>
            </el-carousel>  
        </div>
        <div class="top-title">
            <i class="el-icon-bell"></i>
            <span>全场图书低至1折，更有隐藏神秘惊喜</span>
        </div>
        <div class="newbooks-box">
            <h3>新书上架</h3>
            <Books/>
        </div>
        <div class="newbooks-box">
            <h3>推荐好书</h3>
            <Books/>
        </div>
        <div class="newbooks-box">
            <h3>火爆热门</h3>
            <Books/>
        </div>
    </div>
</template>

<script>
import Nav from '../components/nav.vue'
import Books from '../components/books-content.vue'
export default {
    name:'Home',
    components:{
        Nav,
        Books
    },
    data(){
        return {
           
            imgList:[
            require('../assets/img/1.png'),
            require('../assets/img/2.png'),
            require('../assets/img/3.png')
            ]
        }
    },
    
    
}
</script>

<style scoped>
    .top-title{
        font-size: 14px; font-weight: 400; font-style: normal; text-decoration: none; font-family: "微软雅黑"; color: rgb(77, 76, 76);
        height: 44px;border-bottom: 1px solid rgb(204, 204, 204);
        line-height: 44px;
    }
    .top-title i{
        font-size: 24px;
    color: rgb(255, 153, 51);
    }
   
    .newbooks-box h3{
        border-bottom: 1px dashed #409EFF;
        font-weight: 500;
        padding-bottom: 5px;
        margin:10px 35px;

    }
    .el-carousel__item{
        background: rgb(202, 202, 202);
    }
    .el-carousel__item img{
        width: 100%;
        /* height: 174px; */
    }
   
</style>
