<template>
    <div>
      <input type="text" v-model="searchValue">
      <button @click="getResult">点击</button>
    </div>
</template>
<script>
export default {
    name:'test',
    data(){
        return {
           searchValue:''
        }
    },
    methods: {
        getResult:function(){
            if(this.searchValue == '苹果x'){
                alert('测试成功')
            }
        }   
    }
}
</script>
<style scoped>
    
</style>