<template>
    <div class="page">
        <i class="el-icon-arrow-left" @click="Return"></i>
        <div class="bookInforBox">
            <div class="bookInfor">
                <img :src="obj.cover" alt="">
                <div class="inforBox">
                   <p class="author"> <span>作者</span>{{obj.author}}</p>
                    <p class="pages"><span>页数</span>{{obj.page}}</p>
                    <p class="price"><span>价格</span>￥{{obj.price}}</p>
                   <p class="publisDate"> <span>出版日期</span>{{obj.date}}</p>
                   
                </div>
            </div>
            <p class="name">{{obj.name}}</p>
        </div>
        <div class="buyBox">
            <button class="shopping" type="button" @click="addCarPanelHandel">加入购物车</button>
            <button class="buy" type="button">立即购买</button>
        </div>
        <div class="textContentBox">
            <!-- 内容概要 -->
            <fieldset>
                <legend>内容概要</legend>
                <div class="contentSumarry">
                    {{obj.describe}}
                </div>
            </fieldset>
            <!-- 文评 -->
            <fieldset>
                <legend>作者简介</legend>
                <div class="review">
                    {{obj.info1}}
                </div>
            </fieldset>
            <!-- 作者简介 -->
            <fieldset>
                <legend>作者简介</legend>
                <div class="authorIntro">
                    {{obj.authorInfo}}
                </div>
            </fieldset>
        </div>
        
        
    </div>

</template>

<script>
export default {
    name:'Details',
    components:{
       
    },
      data(){
        return{
            obj:{}
            
            
        } 
    },
    methods:{
           //返回上一页
        Return(){
        this.$router.go(-1)
        },
        addCarPanelHandel(){
            
            if(JSON.parse(localStorage.getItem('loginShow'))[0] === true){
                let data = this.$data.obj
                            //改变state,提交mutation,将数据提交给vuex
                            this.$store.commit('addCarPanelData',data)
                            
                            console.log(data)
            }else{
                alert('还未登录,请前往登录')
                this.$router.push({path:'/mine'})
            }
        }
    },
    created(){
        // console.log(window.location)
        let localAPI = './static/json/book-info.json';
      this.$axios.get(localAPI).then((res) => {
               let id = this.$route.params.id;
            res.data.forEach(response => {
                if(id == response.bookNum) {
                   this.$data.obj = response
                }
            });
            })
            .catch(error => {
            console.log(error);
        })
    }
}
</script>

<style scoped>
.el-icon-arrow-left{
    position: fixed;
    top:10px;
    left: 10px;
    z-index: 2;
    font-size: 36px;
    color: white;
}
    .page{
        margin-top: 60px;
    }
    .bookInforBox{
        width: 100%;
    }
    .bookInfor{
        width: 100%;
        height: auto;
        overflow: hidden;
    }
     .bookInfor img{
         width: 150px;
        
         float: left;
     }
     .inforBox{
         width: 50%;
         height: 200px;
         float: left;
     }
     .inforBox p{
        font-size: 15px;
        margin: 10px 0;
        padding: 10px 0;
         color: rgb(54, 54, 54);
         
     }
     .inforBox span{
         width: 60px;
         font-size: 14px;
         color: rgb(165, 165, 165);
         float: left;
     }
     .name{
         margin: 20px 20px;
         font-size: 30px;
         font-weight: 700px;
         text-align: left;
         font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
     }
     .buyBox button{
         width: 130px;
         height: 50px;
         border-radius: 10px;
         border: none;
         outline:none;
         color: aliceblue;
         font-size: 20px;
         margin: 0 5px;
     }
     .shopping{
         background: rgb(231, 153, 7);
     }
     .buy{
         background: rgb(224, 61, 42);
     }
     .price{
         color:red;
     }
     .textContentBox fieldset{
         margin: 20px 0;
     }
     .textContentBox div{
         font-size: 15px;
         color: #333;
     }
</style>