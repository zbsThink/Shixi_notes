<template>
    <div>
       <p :class=styleObject>我是谁，我从那里来</p>
       <p :class="[demo1,demo2]">我们活着的是为了什么</p>
       <p :class="[{selected:isActive}]">世界的本源是什么</p>
    </div>
</template>
<script>
    export default {
        name:'la',
        data () {
            return {
             styleObject:{
                 active:true,
                 active1:true
             },
            demo1:"demo11",
            demo2:"demo12",
            isActive:true
            }
        },
        created () {
            this.$axios("/sxtstu/news/newsdetails.php")
            .then(res=>{
                console.log(res);
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }
</script>
<style scoped>
    .active{
        color:#f40;
        font-size:18px;
        background:#00f;

    }
    .demo11{
        color:#fff;
        font-size:20px;
        background:#f40;
    }
    .selected{
        color:#000;
        font-size:22px;
        background:#0f0;
    }
</style>