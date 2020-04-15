<template>
    <div id="yanzheng">
        <p class="ti">输入验证码</p>
        <p class="xinxi">
            验证码已发送至 +86 
            <span>
                {{tel}}
            </span>
        </p>
        <!-- 密码输入框 -->
        <van-password-input
        :value="value"
        info="验证码为 4 位数字"
        :mask='false'
        :length="4"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        :error-info="errorInfo"
        />
        <!-- 数字键盘 -->
        <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
        
        />
    </div>
</template>
<script>
import {loginsms} from '@/services/Interface.js'//{tel:手机号，lockcode：验证码}
    export default {
  data() {
    return {
      value: '',
      showKeyboard: true,
      errorInfo:'',
      tel:Number
    };
  },
  created(){
    this.tel=this.$route.query.tel
    console.log(this.$route.query.tel)
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 4);
      if(this.value.length===4){//用户输入验证码为4位时触发函数
          loginsms({tel:this.tel,lockcode:this.value}).then((res)=>{
              if(res.data.code===0){
                var id=res.data.data.u_id
                console.log(id)
                this.$router.push({name:"Shebeishou",query:{id:id}})
              }else{
                this.errorInfo = '验证码错误';
              }
          })
          
          
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    tijiao(){
        if(this.value.length===6){
            console.log("aaaa")
        }
        console.log("vvv")
    }
  }
}
</script>
<style scoped>
#yanzheng{
    width: 23.5rem;
    height: 45.88rem;
}   
.ti{
    margin: 9rem 0rem 0rem 2rem;
    width: 10rem;
    height: 2.63rem;
    font-size: 2rem;
    color:#101010 ;
}
.xinxi{
    margin-left:2rem ;
    margin-top: 1rem;
    line-height: 1.19rem;
    width: 14.75rem;
    font-size: 0.88rem;
}
</style>