<template>
    <van-swipe-cell class="huakuai">
        <p class="listhea">XXX店铺</p>
        <van-card
          desc="正装500kg"
          title="按摩椅"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
          left-width='10.94rem'
        />
        <div class="footer">
            <span class="danjia">￥100</span>
            <p class="footer-r">
                <van-stepper 
                v-model="value"  
                input-width="2.44rem" 
                button-size="1.5rem" 
                min=1
                disable-input/>
            </p> 
        </div>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
          />
        </template>
      </van-swipe-cell>
</template>

  <script>
export default{
    name:'Huakuai',
    data(){
        return {
            value:10
        }
    },
    methods:{
        fuxuan(){

        }
    }
}


  </script>
  <style>
  .goods-card {
    margin: 0;
    background-color:#ccc;
  }
  
  .van-swipe-cell__right .van-button--danger {
    height: 10.5rem;
    width: 100%;
  }
  .huakuai{
    height: 10.5rem;
    width: 23.44rem;
  }
  .listhea{
      height: 2rem;
      border-bottom: 1px #efefef solid;
      border-top: 1px #efefef solid;
      line-height: 2rem;
      padding-left: 1rem;
      font-size: 0.88rem;
      color: #101010;
  }
  .van-swipe-cell__wrapper .goods-card{
      padding: 0px 8px;
      margin: 0px;
      height: 6rem;
      width: 21.44rem;
      box-sizing: border-box;
      float: right;
  }
  .footer{
      line-height: 2rem;
      height: 2rem;
      position: relative;
      float: right;
  }
  .footer-r{
    width: 10rem;
    float: right;
    position: absolute;
    right: 0;
  }
 .footer-r .van-button--mini{
        background: #32ECDE;
        border-color:#32ECDE ;
        border-radius:0;
        position: relative;
        bottom: 2px;
  }
  .footer-r .shuliang{
      display: inline;
      border:#ccc 2px solid;
      padding-bottom: 1px;
      padding-top: 2px;
      border: solid 1px #32ECDE;
      position: relative;
  }
  .danjia{
      color: red;
      float: right;
      margin-right: 12rem;
  }
  .footer-r .van-stepper__minus, .footer-r .van-stepper__plus{
      background: #32ECDE;  
      color: #fff;
  }
  .footer-r .van-stepper__input{
      border:#32ECDE solid 1px ;
      margin: 0;
  }
  </style>