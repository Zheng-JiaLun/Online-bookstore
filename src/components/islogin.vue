<template>
    
        <div class="login-box">
            <div  class="login-title">
                <span @click="signInPage">登陆</span>
                <span @click="registerPage">注册</span>
            </div>
            <div class="login-content" v-show="isSignIn">
               <div class="input-box">
                   <i class="el-icon-edit"></i>
                   <input type="text" ref="input1" placeholder="请输入账号">
                </div>
               <div class="input-box">
                   <i class="el-icon-edit"></i>
                   <input type="text"  ref="input2" placeholder="请输入密码">
                </div>
               <button type="button" @click="signIn">登录</button>
            </div> 
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" v-show="isRegister">
                <el-form-item label="手机号" prop="tel">
                    <el-input v-model.number="ruleForm2.tel" ref="input3"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" ref="input4" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password"  v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item class="bottom-el-form-item">
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
            <!-- <div class="login-content" v-show="isRegister">
                <div class="input-box">
                    <i class="el-icon-edit"></i>
                    <input type="text"  ref="input1" placeholder="请输入账号">
                </div>
                 <div class="input-box">
                     <i class="el-icon-edit"></i>
                     <input type="text"  ref="input2" placeholder="请输入密码">
                </div>
                 <div class="input-box">
                     <i class="el-icon-edit"></i>
                     <input type="text"  ref="input3" placeholder="请输入昵称">
                </div>
                 <div class="input-box">
                     <i class="el-icon-edit"></i>
                     <input type="text"  ref="input4" placeholder="请输入手机号">
                </div>
                <button  type="button"  @click="register">注册</button>
            </div> -->
        </div>
    
</template>

<script>

export default {
  name: "isLogin",
  
  components: {  },
    data() {
        var checkTel = (rule, value, callback) => {
        if (value === '') {
            
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if(value !== '') {
                var reg = /^1[3456789]\d{9}$/;
                if(!reg.test(value)) {
                    callback(new Error('请输入有效手机号'));

                }else {
                    callback();
                }

                
            }
          }
        }, 1000);
      };

      
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
        };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        users: [],
        user: {tel:'',password:''},
        userInfor:[],
        isSignIn:true,
        isRegister:false,
        loginStates: false,
        islogin:[],
        ruleForm2: {
          pass: '',
          checkPass: '',
          tel: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          tel: [
            { validator: checkTel, trigger: 'blur' }
          ]
        }
      };
  
        
    },
    mounted(){
       
    },
  methods:{
      //登陆页面
      signInPage(){
          if(this.isSignIn == false){
              this.isSignIn = true
              this.isRegister = false
          }else{
              return
          }
          
      },
      //注册页面
      registerPage(){
          if(this.isRegister == false){
              this.isRegister = true
              this.isSignIn = false
          }else{
              return
          }
      },
      //登录按键
      signIn(){
             this.user.tel = this.$refs.input1.value
            this.user.password = this.$refs.input2.value
            let userInfor = JSON.parse(localStorage.user);
            if(this.user.tel == '' ||  this.user.password == ''){
                alert("请输入账号密码")
            }else{
                if(localStorage.getItem('user')== null || JSON.parse(localStorage.user)==''){
                alert('该手机号未注册！')
                }else{
                    this.users.push(this.user)
                    let flag = false;
                    let erro = false;
                    userInfor.forEach((item,index)=>{
                        if(this.user.tel == item.tel && this.user.password == item.pass ) {
                            flag = true
                            return
                        }else if(this.user.tel == item.tel && this.user.password !== item.pass ){
                            erro = true
                            return
                        }
                    })
                    if(flag == true){
                        alert("登陆成功")
                        this.islogin.push(true);
                        localStorage.loginShow = JSON.stringify(this.islogin)
                        this.$router.push({name:'home'})
                    }else if(erro){
                        alert("密码错误")
                    }else{
                        alert("账号未注册")
                    }
              
                }
            }
          
            
      },
       submitForm(formName) {
            let userInfor = [];
            let ruleForm2 = {
                pass: '',
                tel: ''
                };
           
            let value = 
            this.$refs[formName].validate((valid) => {
            if (valid) {
                if(localStorage.getItem('user')==null||JSON.parse(localStorage.user)==''){
                     ruleForm2.tel = this.$refs.input3.value;
                    ruleForm2.pass = this.$refs.input4.value;
                    userInfor.push(ruleForm2);
                    localStorage.user = JSON.stringify(userInfor)
                    alert('恭喜您,注册成功!')
                    signInPage();
                    
                    
                }else {
                    let isHas = false;
                    let Array = JSON.parse(localStorage.user);
                    Array.forEach((i,m) => {
                        if(this.$refs.input3.value == i.tel) {
                            console.log('用户已存在')   
                            alert('当前用户已经存在！')
                            isHas = true;
                        }
                    });
                    if(isHas) {
                        return 
                    }else {
                        userInfor = JSON.parse(localStorage.user)
                        // 将输入框的值放进对象
                        ruleForm2.tel = this.$refs.input3.value;
                        ruleForm2.pass = this.$refs.input4.value;
                        userInfor.push(ruleForm2);
                        localStorage.user = JSON.stringify(userInfor)
                        alert('恭喜您,注册成功!');
                        this.isSignIn = true;
                        this.isRegister = false
                       
                    }
                }
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }

     
  },
  computed:{
      
  }
  
};
</script>

<style scoped>
   .login-box{
       width: 100%;
       margin-top: 60px;
   }
    .login-title{
        width: 100%;
        height: 50px;
    }
    .login-title span{
        height: 40px;
        line-height: 40px;
        width: 50%;
        box-sizing: border-box;
        background: rgba(0, 132, 255, 0.76);
        display: inline-block;
        color: aliceblue;
        float: left;
        font-size: 20px;
    }
    .input-box{
        width: 80%;
        margin: 0 auto;
        position: relative;
    }
    .input-box i{
        position: absolute;
        left: 10px;
        top: 5px;
    }
    .login-content input{
        border: 1px solid rgb(122, 122, 122);
        outline: none;
        box-sizing: border-box;
        padding-left: 30px;
        display: block;
        width: 100%;
        height: 30px;
        margin: 20px auto;
    }
     .login-content button{
         background: rgba(0, 132, 255, 0.76);
         color: white;
         width: 80%;
         margin: 0 auto;
         border: none;
         outline: none;
         height: 40px;
     }
      .login-content button:active{
          background: rgba(0, 119, 255, 0.76);
          color: blue;
      }
    
</style>
