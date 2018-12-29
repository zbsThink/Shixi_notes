<template>
    <div>
        <input type="text" placeholder="请输入关键字" class="text" v-model='keywords' @keyup="get($event)" @keyup.up.prevent="selectUp" @keyup.down.prevent="selectDown"/>
        <input type = 'button' value="百度一下" class="button" @click="searchMsg(keywords)"/>
        <ul>
           <li v-for="(value,index) in myData" :key="index" :class="{gray:index==now}" @click="search(value)">{{value}}</li>
        </ul>
       
       
    </div>
</template>
<script>
export default {
    name:'baidu-search',
    data(){
        return {
            keywords:'',
            myData:[],
            now:-1
        }
    },
    methods:{
        get:function(ev){
             window.baidu = {
                sug: (data)=>this.myData = data.s
            };
            if(ev.keyCode == 38 ||ev.keyCode == 40) {
                return
            }
            if(ev.keyCode == 13){
                window.open('https://www.baidu.com/s?wd='+this.keywords)
                this.keywords = ""
            }
            this.jsonp(this.HOST+'?wd='+this.keywords,null,(err,data)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log('successful')
                }
            })
            // 方法有用但是要使用form-data格式传递参数
            // this.$http.jsonp(this.HOST+'?wd='+this.keywords)
            // .then(res=>{
            //     console.log(res)
            // })
            // .catch(error=>{
            //     console.log(error)
            // })
            // 这个不行
        //     let url = this.HOST
        //     this.$axios.post(url+'?wd='+this.keywords)
        //     .then(res=>{
        //         console.log(res.data)
        //     })
        //    .catch(error=>{
        //        console.log(error)
        //    })
        // 这个也不行
        // let url = this.HOST
        // this.$http(url+'?wd='+this.keywords)
        // .then(res=>{
        //     console.log(res.data)
        // })
        // .catch(error=>{
        //     console.log(error)
        // })
            
        },
        selectUp:function(){
            this.now--
            if(this.now == -2){
                this.now = this.myData.length-1
            }
            this.keywords = this.myData[this.now]
        },
        selectDown:function(){
            this.now++
            if(this.now == this.myData.length){
                this.now = -1
            }
            this.keywords = this.myData[this.now]
        },
        search:function(val){
            window.open('https://www.baidu.com/s?wd='+val)
        },
        searchMsg:function(vl){
            window.open('https://www.baidu.com/s?wd='+vl)
        }
    }
}
</script>
<style scoped>
   *{
       margin:0;
       padding:0;
   }
   div{
       position:relative;
   }
   .gray{
       background:#f40;
       color:#fff;
       height:20px;
       line-height:20px;
   } 
   ul{
       list-style:none;
       background:#fafafa;
       width:300px;
       
   }
   li{
       font-weight:bold;
       margin-bottom:10px;
   }
   input.text{
       width:296px;
       height:30px;
       color:#000;
       outline:none;
       font-weight:bold;
       border:1px solid #b8b8b8;
       border-right:1px solid transparent;
   }
   input.button{
       width: 100px;
       height: 33px;
      color: #fff;
      letter-spacing: 1px;
      background: #3385ff;
      border-bottom: 1px solid #2d78f4;
      outline: medium;
      border:0;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius:0;
    position:absolute;
   }
   li:hover{
       background:#f40;
       color:#fff;
   }
</style>