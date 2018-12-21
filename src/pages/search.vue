<template>
    <div class="page">
           <Nav/>
              <div class="search-box">
                  <input type="text" v-model="search">
                  <i class="el-icon-search"></i>
              </div>
        <div class="books" v-for="(bookInfo,index) in filtersBookInfo" 
        :key="index" @click="inDetails(bookInfo)">
                <img :src="bookInfo.cover" alt="">
                <div class="books-content">
                    <p class="booksname">{{bookInfo.name}}</p>
                    <p class="author">作者:{{bookInfo.author}}</p>
                    <p class="bookprice">
                        ￥{{bookInfo.price | addSymbols}}
                    </p>
                </div>
                <i class="el-icon-arrow-right"></i>
        </div>
       <p>加载更多<i class="el-icon-caret-top"></i></p>
    </div>
</template>

<script>
import Nav from '../components/nav.vue'
export default {
    name:'Search',
    components:{
        Nav
    },
    data() {
        return {
            bookInfo:[],
            search:''
        };
    },
     methods: {
    inDetails(bookInfo){
            this.$router.push({
            name: 'details', params: { id:bookInfo.bookNum } 
        });    
    },
    },
    created(){
        this.$axios.get('static/json/book-info.json', {
            }).then(res => {
                let bookInfo = res;
                this.bookInfo = res.data.slice(0,9)
            })
    },
    computed: {
        filtersBookInfo:function(){
            return this.bookInfo.filter((book) => {
                return book.name.match(this.search)
            })
        }
  },
}
</script>

<style scoped>
    .page{
         margin-top: 100px;
    }
    .el-icon-arrow-right{
        position: absolute;
        top:40%;
        right: 10px;
    }
    .search-box{
        background: #ffffff;
        width: 100%;
        height: 40px;
        position: fixed;
        top: 50PX;
        left: 0;
        padding-top: 10PX;
        z-index: 2;
    }
    .search-box input{
        height: 30px;
        width: 70%;
        border: 1px solid rgb(109, 109, 109);

    }
    .books{
       position: relative;
        width: 90%;
        margin: 0 auto;
        border-bottom: 1px solid rgb(131, 131, 131);
    }
    img{
        min-height: 130px;
        max-height: 150px;
        min-width: 80px;
        max-width: 100px;
        width: 25%;
        float: left;
        margin-left: 2%;
    }
    .books-content{
        width: 73%;
        height: 150px;
        text-align: left;
        
        font-size: 16px;
        margin: 0;
    }
    .books-content p{
        padding-left: 10px;
        padding: 5px 0;
    }
    .booksname{
        font-size: 16px;
        font-weight: 600;
    }
    .author{
        font-size: 14px;
        color: rgb(109, 109, 109);
    }
    .my-autocomplete li{
        line-height: normal;
        padding: 7px;
    }
    .my-autocomplete .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
 
</style>