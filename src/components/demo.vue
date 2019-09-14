<template>
    <div>
        <h3>I am demo_component</h3>
        <div>
            <el-button-group v-for="button in buttonData" :key="button">
                <el-button @click="tab = button" :class="['tab-button',{tabActive:tab === button}]">{{button}}</el-button>
            </el-button-group>
            <div class="button-block" v-if="tab === '图片'">这里面由几张图片</div>
            <div class="button-block" v-else-if="tab === '参数'">这是一些苹果手机的参数，你可以参考一下</div>
            <div class="button-block" v-else-if="tab === '评价'">用户对这款手机的评价并不好</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
          tab:'图片',
          buttonData:['图片','参数','评价']
        }
    },
    methods:{
        test(){
            console.log('我生效了')
        }
    }
}
</script>
<style scoped>
   .button-block{
       width:300px;
       height:100px;
       margin:0 auto;
       border:1px solid #0be;
   }
   .tab-button{
       background:#bd0;
       color:#fff;
   }
   .tabActive{
       background:#0eb;
       color:#fff;
   }
   .el-button:focus,.el-button:hover{
       background:#0eb;
       color:#fff;
   }
</style>


