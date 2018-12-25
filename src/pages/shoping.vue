<template>
    <div class="page">
        <Nav/>
        <p class="top-edit">
            <span class="edit" @click="allElection()" :class="{'active':isCheckedAll}" v-show="isShow">全选</span>
            <span class="edit" @click="deleteChecked()" v-show="isShow">删除</span>
            <span class="edit" @click="edit" v-show="isShow">取消</span>
            <span class="edit left-edit" @click="edit">编辑</span>
        </p>
        <p class="nothingAtAll">购物车里面空空如也,赶快去买书沉浸在知识的海洋里吧!</p>
        <div class="car">
            
            <div class="classifyBooks" v-for="(item,index)
                 in carPanelData" :key="index">
               <span class="check" v-show="isShow"
                 @click="selectedProduct(item)" 
                 :class="{'active':item.checked}">
                 </span>

                <i class="el-icon-delete"  v-show="isShow" @click="deleteThis()"></i>

                <img :src="item.cover" alt=""> 
                
                <div class="infor">
                    <p class="name">{{item.name}}</p>
                    <p class="author">{{item.author}}</p>
                    <p class="price">￥ {{item.price | addSymbols}}</p>
                    
                </div>

                <div class="buttonBox" v-show="isShow">
                    <button type="button" @click="changeNum(item,-1)">-</button>
                    <input type="text" v-model="item.count"  onkeyup="onKeyPrice(this);" maxlength="1">
                    <button type="button" @click="changeNum(item,1)">+</button>
                </div>
            </div>
        </div>
        <p class="totalPrice" >{{count}} 件商品 (不包含运费)共计：{{totle | addSymbols}}元</p>
         <service-dialog :show.sync="show"></service-dialog>
        <el-button @click="pay" class="goPay" v-show="isnotShow">前往支付</el-button>

    </div>
</template>

<script>
import Nav from '../components/nav.vue'
import serviceDialog from '../components/diolog'
export default {
    name:'Shoping',
    components:{
        Nav,
        serviceDialog
    },
    data() {
        return{
             show: false,
            isShow:false,
            isnotShow:true,
            isActive:false,
            isCheckedAll:false,
            httm:[]
        }
    },
    
    computed:{
         
        carPanelData(){
            return this.$store.state.carPanelData
        },
        count(){
            return this.$store.getters.totleCount
        },
        totle(){
            return this.$store.getters.totlePrice
        }
    },
    methods:{
        changeNum: function(item,a) {
            
            if(a > 0){
                item.count++ 
                if(item.count >= 10){
                    item.count = 10
                }
            }else{
                item.count--
                if(item.count <= 0){
                    item.count = 1
                }
            }
        },
      
        //支付
        pay(){
            console.log(this.carPanelData)
            if(this.carPanelData.length != 0){
                // this.order.push(true);
                localStorage.order = JSON.stringify(this.carPanelData)
                 sessionStorage.pay = JSON.stringify(this.carPanelData)
                this.$router.push({ name: 'settlement'})
            }else{
                return this.show = true;
            }
            
        },
        //判断是否进入编辑页面
        edit(){
             
            this.isShow = !this.isShow
            this.isnotShow = !this.isnotShow
        },

        //删除当前
        deleteThis(){
            this.carPanelData.splice(0,1)
        },
        //删除选中
        deleteChecked(){
            let item = this.carPanelData
            item.forEach((obj,index) => {
                if(obj.checked == true){
                    item.splice(index,1)
                    return
                }else{
                    return
                }
                
            });
        },
        //判断选中
        selectedProduct(item){
             console.log(item.checked)
            if(typeof item.checked == 'undefined'){
                this.$set(item,"checked",true)
            }else{
                item.checked = !item.checked
            }
        },
        //判断全选
        allElection(){
            
            this.isCheckedAll = !this.isCheckedAll
            var _this = this
                // if(this.isCheckedAll){
                    this.carPanelData.forEach(function(item,index){
                       if(typeof item.checked == 'undefined'){
                            _this.$set(item,"checked",_this.isCheckedAll)
                        }else{
                            item.checked = _this.isCheckedAll
                        }
                    })
                // }
            }
        },
        
    
    
}
</script>

<style scoped>
    .page{
        margin-top: 75px;
        height: calc(100% - 300px);
    }
    .el-icon-delete{
        position: absolute;
        right: 20px;
        top: 40%;
    }
    .top-edit{
        position: fixed;
        top: 53px;
       text-align: right;
        width: 100%;
        margin: 0;
    }
    .classifyBooks .active{
        background: red;
    }
    .check{
        width: 20px;height: 20px;
        line-height: 147px;
        background: #ccc;
        border:1px solid rgb(78, 78, 78);
        border-radius: 50%;
        
        position: absolute;
        top: 40%;
        left: 0;
    }
    .left-edit{
        margin-right: 20px;
    }
    .edit {
        
        padding: 2px 8px;
        margin-left: 5px;
        font-size: 16px;
        color: rgb(34, 34, 34);
        text-align: right;
    }
    .edit:active{
        background: rgb(51, 102, 204);
        color: #fff;
    }
    .car {
        width: 100%;
        height: 100%;
        min-height: 300px;
        
    }
    .classifyBooks {
        width: 100%;
        display: flex;
        margin: 0px auto;
        border-bottom: 1px solid #ccc;
        background-color: #fff;
        position: relative;
        
        padding-top: 10px;
        /* padding-left: 10px */
    }
    .classifyBooks img {
        width: 78px;
        margin-left: 25px;
        height: 98px;overflow: hidden;
    }
    .infor {
        
        width: calc(90% - 78px);
        padding: 15px 0px;
       
    }
    .infor p {
        margin: 0 0 0 10px;
        width: 180px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .infor .name {
        height: 25px;
        color: rgb(51, 102, 204);
        font-size: 14px;
        line-height: 25px;
    }
    .author {
        height: 20px;
        color: rgb(138, 136, 136);
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 2px;
    }
    .price {
        height: 35px;
        color: red;
        font-size: 18px;
        line-height: 35px;
    }
    .all-price{
       color: red; 
    }
    .buttonBox {
        width: 80px; 
        height: 30px;
        display: flex;
        position: absolute;
        bottom: 4px;
        right: 14px;
    }
    .buttonBox button {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        background-color: #fff;
        outline: none;
    }
    .buttonBox input {
        width: 25px;
        height: 23px;
        text-align: center;
        padding:0;
        outline: none;
        border: none;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    .totalPrice {
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: left;
        margin: 10px 0 0 0;
    }
    .goPay {
        position: fixed;
        bottom: 50px;
        left: 0;
        width: 100%;
        
        height: 60px;
        border: 1px solid transparent;
        border-radius: 15px;
        color: #fff;
        font-size: 18px;
        outline:none;
        letter-spacing: 5px;
        background-color: rgb(50, 184, 224);
        
    }
    .nothingAtAll{
        margin: 20px 50px;
        font-size: 15px;
        color: rgb(68, 68, 68);
        border:1px solid #333;
        border-radius: 5px;
        padding: 0 20px;
        position: absolute;
        top:10%;
        left: 0;

    }

</style>
