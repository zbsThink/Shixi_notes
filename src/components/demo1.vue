<template>
    <div>
        <h3>组件的切换</h3>
        <div>
           <el-button-group>
                <el-button :class="['tab-button',{tabActive:currentTab === tab}]" type="default" v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{tab}}</el-button>
           </el-button-group>
          <component :is="currentTabComponent" class="tab"></component>
        </div>
    </div>
</template>
<script>
import Demo from './demo';
import Demo2 from './demo2';
import Helloworld from './HelloWorld'
export default {
    data(){
        return {
          currentTab:'Demo',
          tabs:['Demo','Demo2','Helloworld'] 
        }
    },
    computed:{
        currentTabComponent(){
            return this.currentTab
        }
    },
    components:{
        Demo,
        Demo2,
        Helloworld
    }
}
</script>
<style scoped>
   .tab-button{
       background:#f00;
   }
   .tabActive{
       background:#00f;
   }
   .el-button:focus,.el-button:hover{
       background:#0eb;
       color:#fff;
   }
</style>


