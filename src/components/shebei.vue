<template>
    <div class="list">
        <div class="tu"></div>
        <div class="data">
            <p class="p1">COCOCITY店</p>
            <p class="p2">店铺设备数：10台</p>
            <p class="p3">XX省XX市XX区XX街道</p>
        </div>
    </div>
</template>

<style scoped>
.list{
    /* width:23.5rem ; */
    height: 6.06rem;
    display: flex;
    justify-content: space-between;
    background: red;
}
.tu{
    width: 7.94rem;
    height: 5.44rem;
    margin-top: 0.6rem;
    background: chartreuse;
}
.data{
    /* height: 5.44rem; */
    width: 15rem;
    background: coral;
    }
.data .p1{
    line-height: 1.19rem;
    margin-top: 1rem;
    font-size: 0.88rem;
}
.data .p2{
    line-height: 2.7rem;
    font-size:0.81rem ;
}
.data .p3{
    font-size: 0.81rem;
}
</style>