<template>
    <div class="list">
        <!-- <van-cell-group> -->
            <van-field v-model="tel" placeholder="请输入手机号" class="kuang ding"/>
            <van-field v-model="password" placeholder="请输入密码" class="kuang"/>
            <div class="kuang">
                <van-field v-model="password2" placeholder="请再次输入密码" class="kuang"/>
                <van-field v-model="value" placeholder="短信验证码" class="kuang yanzheng" @click="fasong"/>
            </div>
            <van-button class="btnh" @click="fasong">获取验证码</van-button>
            <van-field v-model="code" placeholder="请输入邀请码" class="kuang"/>
            <van-field name="checkbox" class="fuxuan">
                <template #input class="xieyi">
                    <van-checkbox v-model="checkbox" shape="square" />
                    <span class="tishi">
                        我已阅读并接受
                        <span>《用户协议》</span>
                    </span>
                </template>
            </van-field>
            <van-button type="default" class="zhuce">注册</van-button>
        <!-- </van-cell-group> -->
        <p id="denglu" @click="denglu">
            已有账号，<span>马上登录</span>
        </p>

        <van-popup 
        v-model="show"  
        position="top" 
        :style="{ height: '10%' }"
        class="tan"
        round
        >请输入正确验证码</van-popup>

        <van-popup 
        v-model="show2"  
        position="top" 
        :style="{ height: '10%' }"
        class="tan"
        round
        >注册失败</van-popup>

        <van-popup 
        v-model="show3"  
        position="top" 
        :style="{ height: '10%' }"
        class="tan"
        round
        >请求错误，请查看手机号是否正确，稍后再试</van-popup>
    </div>
</template>

<script>
import {telcode} from '@/services/Interface'  //发验证码
import {loginsms} from '@/services/Interface.js'//无id验证验证码
import {anvitationcode} from '@/services/Interface.js'//注册请求
export default {
  data() {
    return {
      value: '',
      checkbox:true,
      tel:Number,
      password:'',
      password2:'',
      code:'',
      show:false,
      show2:false,
      show3:false
    };
  },
  created(){
      this.tel=this.$route.query.tel
  },
  methods:{
      fasong(){
          telcode({tel:this.tel}).then((res)=>{
              console.log(res)
              if(res.data.code !==0){
                  this.show3=true
              }
          })
      },
      denglu(){
          if(this.value){
              loginsms({tel:this.tel,lockcode:value}).then((res)=>{
                  if(res.data.code===0){
                    anvitationcode({tel:this.tel,password:this.password,code:this.code}).then((res)=>{
                        var id=res.data.data.u_id;
                        if(res.data.code===0){
                            this.$router.push({name:"Shebeishou",query:{id:id}})
                        }else{
                            this.show2=true
                        }
                    })
                }else{
                  this.show=true
              }
              })
          }else{
              this.show=true
          }
      this.$router.push({name:"Home",query:{tel:this.tel}})
    }
  }
  
  
}
</script>
<style scoped>
.tan{
  text-align: center;
  line-height: 4rem;
  color: red;
  font-size: 1rem;
}
.xieyi{
    border: none;
}
.kuang{
    width: 17.25rem;
    height: 3.06rem;
    margin: 0.5rem auto;
    background: #F4F3F3;
    border-radius: 0.5rem;
    color: #101010;
}   
.ding{
    margin-top: 5rem;
}
.yanzheng,.btnh{
    float: left;
    margin: 0.5rem;
}
.yanzheng{
    width:10.63rem ;
    margin: 0.5rem 0rem 0.5rem 0rem;
}
.fuxuan{
    margin:1.5rem 0rem 2rem 2rem ;
    width: 17.5rem;
}
.tishi span{
    color: red;
    line-height:1.19rem ;
    font-size:0.88rem ;
}
.zhuce{
    background:#32ECDE;
    color: #fff;
    width: 20.5rem;
    height: 2.75rem;
    line-height: 2.75rem;
    text-align: center;
    display: block;
    margin:0 auto;
    border-radius: 0.5rem;
}
#denglu{
    text-align: center;
    font-size:0.88rem ;
    margin-top: 1rem;
}
#denglu span{
    color: red;
}
</style>