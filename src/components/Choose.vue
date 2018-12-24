<template>
    <div>
        <div :class = "[{choosed : select == false},'choose']" @click="changeImage"></div>
    </div>
</template>
<script>
export default {
    name:'choose',
    data () {
        return {
            select:true
        }
    },
    methods: {
       changeImage:function(){
           this.select = !this.select   
       }
    }
    
}
</script>
<style scoped>
   .choose{
       width: 30px;
       height:30px;
       background:url('../assets/check_normal.png') 50% 50% no-repeat;
       background-size:20px 20px;
   }
   .choosed{
       width: 30px;
       height:30px;
       background:url('../assets/check_press.png') 50% 50% no-repeat;
       background-size:20px 20px;
   }
</style>