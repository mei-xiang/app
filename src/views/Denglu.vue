<template>
<!-- 短信扫码选择页面 -->
  <div id="about">
    <span class="fan" @click="fanhui">&lt</span>
    <p class="huanying">欢迎登录</p>
    <van-button type="default" class="btnx btnx1" @click="xyb">获取短信验证码</van-button>
    <van-button type="default" class="btnx btnx2" @click="saoma">扫码登陆</van-button>
    <p class="tiaokuan">
      登录代表您已同意
      <span>《法律条款与隐私政策》</span>
    </p>
    <van-popup 
    v-model="show"  
    position="top" 
    :style="{ height: '10%' }"
    class="tan"
    round
    >手机号输入错误，请重新输入</van-popup>
    <van-popup 
    v-model="showX"  
    position="top" 
    :style="{ height: '10%' }"
    class="tan"
    round
    >系统繁忙请稍后再试</van-popup>
  </div>
</template>

<script>
import {telcode} from '@/services/Interface'

export default {
  name: 'Denglu',
  data(){
    return {
      tel:Number,
      show:false,
      showX:false
    }
  },
  components: {
  },
  created(){
   this.tel=this.$route.query.tel
    console.log( this.$route.query.tel)
  },
  methods:{
    fanhui(){
      this.$router.push({name:"Home",query:{tel:this.tel}})
    },
    xyb(){//跳转获取验证码登录界面
     telcode({tel:this.tel}).then((res)=>{
      var yanzheng =res
      console.log(yanzheng)
      if(yanzheng.data.code===0){
        
        this.$router.push({name:"Fayanzheng",query:{tel:this.tel}})
      }
      if(yanzheng.data.code===102){
        // console.log("手机号有误")
        this.show = true;
      }
      if(yanzheng.data.code===500){
        // console.log("手机号有误")
        this.showX = true;
      }
    })
    },
    saoma(){//调用扫码
      window.Android.scan()
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
#about{
  width: 23.44rem;
  height: 50.75rem;
}
.fan{
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #666;
}
.huanying{
  position: absolute;
  top: 9.31rem;
  left: 2.38rem;
  font-size: 2.25rem;
  color: #101010;
}
.btnx{
  width: 18.75rem;
  height: 3.38rem;
  position: absolute;
  left: 2.38rem;
  background: #1ADCC1;
  color: #fff;
  line-height: 1.25rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  text-align: center;
}
.btnx1{
  top: 15.75rem;
}
.btnx2{
  top: 21.63rem;
}

.tiaokuan{
  position: absolute;
  left: 1rem;
  top: 46rem;
  color:#D0CFCF;
  font-size: 0.75rem;
}
.tiaokuan span{
  color: red;
}
</style>
