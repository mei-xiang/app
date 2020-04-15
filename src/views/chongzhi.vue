<template>
<!-- 充值界面 -->
    <div>
        <p class="header">
        </p>
        <p class="zi">
            请选择付款方式
        </p>
        <div class="fangshi">
            <div  class="left"></div>
            <div  class="right"></div>
        </div>
        <p class="jine">
            请选择充值金额
        </p>
        <!-- v-bind:class="{ 'active': isActive,'xuan1':true }"  -->
        <div class="xuanze">
            <div 
            type="info"
            @click="jinbtn(i,n)"
            v-for='(n,i) in data'
            :key='n'
            class="xuan1"
            
            >{{n}}元{{index}}---------{{i}}</div>
            <!-- class="{{1==i?'active':'xuan1';}}" -->
        </div>
        <van-field class="jinekuang" v-model="number" type="number" placeholder="请输入充值金额"/>
        <van-button type="info" class="btnchong">充值</van-button>
    </div>
</template>
<script>
export default {
    name:"Chongzhi",
    data(){
        return {
            number:'',
            name:'',
            isActive:true,
            data:[26,86,112,130,260,430,560,860,1120],
            index:1
        }
    },
    methods:{
            jinbtn(a,e){
                this.number=e
                // this.index=a
                // console.log(a,e)
                console.log(this.number,this.index)
            },
            class(i){
                console.log(i)
            }
        }
}
</script>
<style scoped>

.header{
    height:2.75rem;
    background:#32ECDE 100% ;
    color: #fff;
}
.zi{
    line-height: 3rem;
    font-size:1.13rem;
    padding-left:1rem ;
}
.fangshi{
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
}
.fangshi div{
    width: 10.69rem;
    height: 5.13rem;
    background: red;
}
.jine{
    font-size: 1.13rem;
    line-height: 5rem;
    padding-left:1rem;
}
.xuan1,.xuan2,.xuan3,.xuan4,.xuan5,.xuan6,.xuan7,.xuan8,.xuan9{
    width:6.5rem ;
    height: 4.13rem;
    /* background: #32ECDE 100%; */
    background: #fff;
    color: #000;
    border: #fff 1px solid;
    box-shadow:0rem 0.06rem 0.13rem 0rem;
    /* flex: 1; */
    margin: 0.25rem;
    border-radius: 1rem;
    font-size: 0.68rem;
    padding: 0;
    box-sizing: border-box;
    border: none;
    text-align: center;
    line-height: 4.13rem;
}
.xuanze{
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    padding: 1rem;
}
.jinekuang{
    width: 20.5rem;
    height: 2.69rem;
    border: #BBBBBB 1px solid;
    margin: 0 auto;
}
.btnchong{
    background: #32ECDE;
    width: 19.38rem;
    height: 2.75rem;
    display: block;
    margin: 6rem auto;
}
.active{
    background:#32ECDE 100% ;
    color: #fff;
}
</style>