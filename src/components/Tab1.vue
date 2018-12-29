<template>
    <div>
        <nav :class="active" @click.prevent>
           <a href="#" class = "home" @click = "makeActive('home')">首页</a>
           <a href="#" class = "service" @click = "makeActive('service')">服务</a>
           <a href="#" class = "project" @click = "makeActive('project')">项目</a>
           <a href="#" class = "conact" @click = "makeActive('conact')">联系我们</a>
        </nav>
        <p v-if="active=='home'">所有内容集结于此</p>
        <p v-else-if="active=='service'">优质的服务使你放心</p>
        <p v-else-if="active=='project'">具体什么项目等你来看</p>
        <p v-else-if="active=='conact'">联系我们了解更多</p>
        <p v-else>not found 404</p>
    </div>
</template>
<script>
export default {
    name:'multiply-tab',
    data(){
        return {
            active:'home'
        }
    },
    methods: {
       makeActive:function(item){
           this.active = item
       }   
    }

}
</script>
<style scoped>
    a{
        text-decoration:none;
        font-size:18px;
        color:#fff;
        background:#000;
        display:inline-block;
        line-height:30px;
        height:30px;
        width:100px;
        text-align:center;
    }
    nav.home .home,
    nav.service .service,
    nav.project .project,
    nav.conact .conact{
        background:#f40;
    }
    p b{
        background:#c4d7e0;
    }
</style>