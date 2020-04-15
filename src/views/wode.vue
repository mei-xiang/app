<template>
<div class="wode">
    <p class="header">个人中心</p>
    <div class="tou">
        <div class="img"></div>
        <div class="xinxi">
            <van-button type="info" class="shezhi">设置</van-button>
            <p class="nicheng">
                <span>昵称</span>
                <span class="touxian">事业合伙人</span>
            </p>
            <p id="id">WHEIFVE:JDLFJLHFLJLF</p>
        </div>
    </div>
    <div class="qianbao">
        <div class="yonghu"></div>
        <div class="huoyue"></div>
        <div class="zijin"></div>
    </div>
    <div class="list">
        <ul class="hea">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="foo">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>

</template>

<style scoped>
.wode{
    background: #efefef;
    height: 100rem;
}
.header{
    width:23.44rem ;
    height:2.75rem ;
    background: #32ECDE 100%;
    text-align: center;
    color: #fff;
    line-height: 2.75rem;
}
.tou{
    display: flex;
    /* justify-content: space-between; */
    width:23.44rem ;
    height: 7.13rem;
    background: #fff;
    /* margin-bottom: 1rem; */
}
.img{
    margin: 1.5rem 1rem;
    width: 4rem;
    height: 4rem;
    background: pink;
    border-radius: 50%;
}
.nicheng{
    line-height: 1.81rem;
    margin-top: 1.5rem;
    color: #000;
}
.nicheng .touxian{
    color: #fff;
    line-height: 1.61rem;
    display: block;
    width:4.56rem ;
    height: 1.61rem;
    border-radius: 0.9rem;
    background: red;
    font-size:0.88rem ;
    float: left;
    padding: 0 0.5rem;
    margin: 0 0.5rem;
}
.nicheng span{
    float: left;
}
.shezhi{
    width: 2rem;
    height: 2rem;
    font-size: 0.88rem;
    border-radius: 1rem;
    position: absolute;
    right: 0rem;
}
#id{
    line-height: 3rem;
}
.list ul{
    margin-top: 0.5rem;
}
.list ul li{
    width:23.44rem;
    height: 2.8rem;
    line-height:2.8rem;
    border-bottom:#efefef 1px solid ;
    background: #fff;
}
.qianbao{
    width: 23.44rem;
    height: 6.44rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    margin-top: 1rem;
}
.qianbao div{
    flex: 1;
    background: blueviolet;
    margin: 0 0.5rem;
}
</style>