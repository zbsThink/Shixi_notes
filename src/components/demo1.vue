<template>
    <div>
        <form id="main" v-cloak>
           <div class="bar">
               <input type="text" v-model="searchValue" placeholder="请输入搜索内容">
           </div>
           <ul>
               <li v-for="(article,index) in  filArticle" :key="index">
                   <a :href="article.url"><img :src="article.image" alt="">
                   </a>
                   <p>{{article.title}}</p>
               </li>
           </ul>
        </form>
    </div>
</template>
<script>
export default {
    name:'search',
    data(){
        return {
           searchValue:'',
           articles: [
            {
                "title": "What You Need To Know About CSS Variables",
                "url": "http://www.runoob.com/css/css-tutorial.html",
                "image": "http://static.runoob.com/images/icon/css.png"
            },
            {
                "title": "Freebie: 4 Great Looking Pricing Tables",
                "url": "http://www.runoob.com/html/html-tutorial.html",
                "image": "http://static.runoob.com/images/icon/html.png"
            },
            {
                "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
                "url": "http://www.runoob.com/css3/css3-tutorial.html",
                "image": "http://static.runoob.com/images/icon/css3.png"
            },
            {
                "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
                "url": "http://www.runoob.com/css3/css3-tutorial.html",
                "image": "http://static.runoob.com/images/icon/css3.png"
            },
            {
                "title": "Learn SQL In 20 Minutes",
                "url": "http://www.runoob.com/sql/sql-tutorial.html",
                "image": "http://static.runoob.com/images/icon/sql.png"
            },
            {
                "title": "Creating Your First Desktop App With HTML, JS and Electron",
                "url": "http://www.runoob.com/js/js-tutorial.html",
                "image": "http://static.runoob.com/images/icon/html.png"
            }
        ]
        }
    },
    computed:{
        filArticle:function(){
            let arr = []
            this.articles.forEach(item=>{
               if(item.title.toLowerCase().indexOf(this.searchValue)!=-1){
                  arr.push(item)
               }
            })
            setTimeout(()=>{
                this.searchValue=''
            },2500)
            return arr
        }
    }
}
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .bar input{
        width:424px;
        height:30px;
        margin-bottom:20px;
        color:#005c5c;
        font-weight:bold;
        font-size:18px;
    }
    ul{
        width:428px;
        overflow:hidden;
    }
    li:hover{
        background:#927a55;
        color:#fff;
    }

    ul li{
        list-style:none;
        overflow:hidden;
        margin-bottom:10px;
        background:#c4dcd4;
    }
    a{
        text-decoration:none;
    }
     img{
      width:60px;
      height:60px;
      float:left
    }
    ul li p{
        margin-left:75px;
        padding-top:12px;
        color:#1a1d37;
        font-weight:bold;
    }
    
</style>