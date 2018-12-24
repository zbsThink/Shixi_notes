<template>
    <div class = 'log'>
       <p>{{content}}</p> 
    </div>
</template>
<script>
export default {
    name:'log',
    props:['content'],
    data () {
        return {
        }
    }
}
</script>
<style scoped>
    .log{
        position:fixed;
        z-index:999;
        top:15%;
        left:25%;
        background:rgba(0,0,0,0.7);
        border-radius:5px;

    }
    .log p{
        width:200px;
        height:30px;
        line-height:30px;
        color:#fff;
        font-style:normal;
    }
</style>