<template>
    <div>
        <ul>
          <li :class="[{active:tabState == true},'select']" @click="changeTab">选项1</li>
          <li :class="{active:tabState == false}" @click="changeTab">选项2</li>
        </ul>
        <div class="tabShow" v-if="tabState == true">我是产品展示</div>
        <div class="tabArgs" v-else>我是产品参数</div>
    </div>
</template>
<script>
export default {
    name:'tab',
    data(){
        return {
            tabState:true
        }
    },
    methods: {
     changeTab:function(){
         this.tabState = !this.tabState
         return this.tabState
     }   
    }
}
</script>
<style scoped>
   ul{
       background:#f40;
   }
    li{
        list-style:none;
        display:inline-block;
        width:100px;
        height:20px;
        line-height:20px;
        background:#666;
        color:#fff;
        margin:0 30px;

    }
    .active{
        background:#ffb;
        color:#000;
    }
</style>