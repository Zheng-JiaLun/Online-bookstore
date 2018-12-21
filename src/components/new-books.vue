<template>
   <div  class="books">
      <div class="newbooks-content" v-for="(bookInfo,index) in bookInfo" :key="index"
      @click="inDetails(bookInfo)"
      >
                <img :src="bookInfo.cover" alt="">
                <p class="bookname">{{bookInfo.name}}</p>
                <p class="bookprice">
                    ￥{{bookInfo.price | addSymbols}}
                </p>
            </div>
    </div>
</template>

<script>

export default {
    name:'Shoping',
   
    data(){
        return{
            bookInfo:[]
        } 
    },
    methods:{
        inDetails(bookInfo){
             this.$router.push({
                name: 'details', params: { id:bookInfo.bookNum } 
            });    
        }
    },
    created(){
        this.$axios.get('static/json/book-info.json', {
            params: {
                // get 参数可放置于此字段中，key-value对形式设置
                // 一般建议这么做，便于控制
            }
            }).then(res => {
               let bookInfo = res;
                this.bookInfo = res.data.slice(0,4)
            console.log(bookInfo)
            
            })
            .catch(error => {
            console.log(error);
        })
    }
    
}
</script>

<style scoped>

</style>