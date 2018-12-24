<template>
    <div>
       <log content = "测试log" v-if="added"/> 
       <div class = 'button' @click="showMsg">点我</div>
       <p v-if="added">使用v-if让组件出现和消失</p>
    </div>
</template>
<script>
import Log from './Log.vue'
export default {
    name:'parent',
    data () {
        return {
            added:false
        }
    },
    components:{
        Log
    },
    methods: {
       showMsg:function(){
           this.added = true
           setTimeout(()=>{
               this.added = false
           },500)
       }   
    }
}
</script>
<style scoped>
    
    .button{
        width:100px;
        height:40px;
        line-height:40px;
        text-align:center;
        background:#f40;
        color:#fff;
        font-size:18px;
        margin:50px auto;
    }
    div>p{
        margin-top:100px;
    }
</style>