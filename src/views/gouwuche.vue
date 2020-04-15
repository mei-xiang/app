<template>
    <div class="gouwuche">
        <p class="header">购物车</p>
        <van-checkbox-group v-model="result" ref="checkboxGroup" >
            <van-cell 
            :key='p' 
            v-for='p,i in list' 
            @click='fuxuan(i)' 
            class="gouwulie"
            label-disabled>
                <van-checkbox 
                :name="i" 
                ref="checkboxes" 
                label-disabled
                >
                </van-checkbox>
                <Huakuai></Huakuai>
            </van-cell>
        </van-checkbox-group>
        
        <div class="dingdantijiao">
            <van-submit-bar
            :price="3050"
            button-text="结算"
            @submit="onSubmit"
            class="dingdan1"
            >
            <van-checkbox 
            v-model="checked" 
            class="dingdan2" 
            @click='che'
            ref='quanxuan'
            >全选</van-checkbox>
            </van-submit-bar>
        </div>
    </div>
</template>
<script>
    import Huakuai from '../components/gouwuchehuakuai'
    export default{
        name:'Gouwuche',
        data(){
            return {
                value:10,
                checked:false,
                result:[],
                list:[1,2,3,4,5]
            }
        },
        components:{
            Huakuai
        },
        methods:{
            onSubmit(){
            },
            onClickEditAddress(){
            },
            che(){
                if(this.result.length !== this.$refs.checkboxes.length){
                this.$refs.checkboxGroup.toggleAll(true)
            }else{
                this.$refs.checkboxGroup.toggleAll(false)
            }
                // this.$refs.checkboxGroup.toggleAll(true)
            },
            checkAll() {
                this.$refs.checkboxes.toggleAll(true);
            },
            toggleAll() {
                this.$refs.checkboxes.toggleAll();
            },
            fuxuan(index){
                this.$refs.checkboxes[index].toggle();
                // console.log(this.result)
                // console.log(this.$refs.checkboxes)
                // console.log(this.$refs.checkboxes[index])
            },
            change(){
                // console.log(this.result)
            },
            jtquanxuan(){
            if(this.result.length === this.$refs.checkboxes.length){
                this.$refs.quanxuan.toggle(true)
            }else{
                this.$refs.quanxuan.toggle(false)
            }
            },
        },
        updated(){
            // console.log(this.result)
            // console.log(this.$refs);
            this.jtquanxuan()
        },
        mounted(){
            var fuxuan = document.querySelectorAll('.van-checkbox__icon')
            var jia = document.querySelectorAll('.van-stepper__plus')
            var jian = document.querySelectorAll('.van-stepper__minus')
            // console.log(fuxuan)
            for(let i=0; i<jia.length;i++){
                jia[i].addEventListener("click", function(event){
                    console.log('aaa')
                 event.stopImmediatePropagation();
                }, true);
                jian[i].addEventListener("click", function(event){
                    console.log('aaa')
                 event.stopImmediatePropagation();
                }, true);
            }
            
        }
    }
</script>
<style scoped>
.gouwulie{
    margin: 0;
    padding: 0;
}
.header{
    width: 23.44rem;
    height: 2.75rem;
    background:#32ECDE 100% ;
    text-align: center;
    line-height: 2.75rem;
    color: #fff;
}
.dingdantijiao{
    width: 23.44rem;
    height: 2.75rem;
    position: fixed;
    /* bottom: 5rem; */
}
.dingdan1{
    bottom: 3rem;
    border-top: 1px #ccc solid;
}
.van-submit-bar__button--danger{
    background: #32ECDE 100%;
}
.van-cell__value--alone{
    position: relative;
}
.van-checkbox--label-disabled{
    position: absolute;
    left: 0.5rem;
    top: 50%;
}
.gouwuche{
    padding-bottom: 7rem;
}
</style>