<template>
  <div id="home">
    <p class="huanying">欢迎登录</p>
    <div class="lan">
        <span class="zi">+86 ></span>
        <van-field type="number" placeholder="请输入手机号" class="shuru" v-model="
        tel"/>
    </div>
    <p class="tishi">未注册的手机号自动创建</p>
    <span class="zhuce" @click="zhuce">注册</span>
    <p class="tiaokuan">
      登录代表您已同意
      <span>《法律条款与隐私政策》</span>
    </p>
    <van-button type="default" class="btnx" @click="denglu">下一步</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import {telcode} from '@/services/Interface.js'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data(){
    return {
      tel:''
    }
  },
  created(){
    this.tel=this.$route.query.tel
  },
  methods:{
    denglu(){
      telcode(this.tel)
      // console.log(this.$router.push)
      this.$router.push({name:"Denglu",query:{tel:this.tel}})
    },
    zhuce(){
      this.$router.push({name:"Yaoqingma",query:{tel:this.tel}})
    }
  }


}
</script>

<style scoped>
#home{
  margin: 0 auto;
  width: 23.44rem;
  height: 50.75rem;
}

.huanying{
  position: absolute;
  top: 9.31rem;
  left: 2.38rem;
  font-size: 2.25rem;
  color: #101010;
}
.zi{
  font-size: 1rem;
}
.lan{
  position: absolute;
  top: 15.63rem;
  height: 3rem;
  left: 2.3rem;
  width: 18rem;
  border-bottom: 1px #101010 solid;
  font-size: 0.88rem;
  /* background: blueviolet; */
  line-height: 3rem;
}
.lan span,.lan .shuru{
  float: left;
}
.shuru{
  margin-left:3rem ;
  border: none;
  /* background: red; */
  width: 15rem;
  display: block;
  margin-top: -2.8rem;
}
.tishi{
  position: absolute;
  top: 19rem;
  left: 2rem;
  font-size: 0.88rem;
  color:#777474;
  font-family: PingFangSC-regular;
}
.btnx{
  width: 18.75rem;
  height: 3.38rem;
  position: absolute;
  top: 22.94rem;
  left: 2.38rem;
  background: #1ADCC1;
  color: #fff;
  line-height: 1.25rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  text-align: center;
}
.zhuce{
  font-size: 1rem;
  position: absolute;
  top: 27rem;
  left: 10.75rem;
  color: #101010;
}
.tiaokuan{
  position: absolute;
  left: 1rem;
  top: 35rem;
  color:#D0CFCF;
  font-size: 0.75rem;
}
.tiaokuan span{
  color: red;
}
</style>
