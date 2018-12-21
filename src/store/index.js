import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        title:'',
        carPanelData:[],
        isLogin: 0,
        user:{}

    },
    
    mutations:{
        // 修改标题状态
        changeTitle(state, title) {
            state.title = title;
        },
        changeLoginState(state, isLogin) {
            state.loginState = isLogin;
           
        },
        changeLogin(state,status){
            state.isLogin = status; 
        },
        /**
         data = 加入购物车数据
         循环购物车数据

        **/
        addCarPanelData(state,data){
            //设置一个开关
            let bOff = true
            state.carPanelData.forEach((goods) => {
                //如果商品ID存在,就设置count++数量加一
                if(goods.bookNum === data.bookNum){
                    goods.count++
                    bOff = false
                }
            });
            //如果上面的步骤执行则下面步骤不执行 
            if(bOff){
                //设置新变量goodsData = 传进来的data
                let goodsData = data
                //为这个变量设置count属性,默认值为1
                Vue.set(goodsData,'count',1)
               
                //将这个goodsData,push到carPanelData里面
                state.carPanelData.push(goodsData)
            }
           
        }
    
    },
   
    actions: {
        changeLoginState(context, isLogin) {
            context.commit('changeLoginState', isLogin);
        },
        loginAction({commit}){
            commit('changeLogin',1);
        }
    },
    getters: {
        msg(state) {
            return state.loginState ? "个人中心" : "登录";
        },
        //购物车商品数量计算
        totleCount(state){
            let count = 0
            state.carPanelData.forEach((goods) => {
                count += goods.count
            })
            return count
        },
        //总价格计算
        totlePrice(state){
            let price = 0
            state.carPanelData.forEach((goods) => {
                price += goods.price * goods.count
            })
            return price
        },
        

    }
})