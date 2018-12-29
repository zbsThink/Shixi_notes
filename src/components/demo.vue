<template>
    <div>
   <form id="main" v-cloak>
	<h1>Services</h1>

	<ul>
    <!--使用toggleActive改变每个商品的active值，并通过判断数据services的active的值来实现选中效果以及最后计算出价格-->
		<li v-for="(service,index) in services" :key="index" @click="toggleActive(service)" v-bind:class="{ 'active': service.active}">
			{{service.name}} <span>{{service.price | currency}}</span>
		</li>
	</ul>

	<div class="total">
		Total: <span>{{total() | currency}}</span>
        
	</div>

   </form>
    </div>
</template>
<script>
export default {
    name:'test',
    data(){
        return {
           services:[
               {
                   name:'iphone xs Max',
                   price:10299,
                   active:true
               },
               {
                   name:'huawei mate20 pro',
                   price:6499,
                   active:false
               },
               {
                   name:'xiaomi Mix3',
                   price:4566,
                   active:false
               }
           ]
        }
    },
    methods: {
        toggleActive:function(s){
            s.active = !s.active
        },
        total:function(){
            let total = 0
            this.services.forEach(s=>{
                if(s.active){
                    total+=s.price
                }
            })
            return total
        }
    },
   filters:{
       currency:function(value){
           if(!value)return
           return '$'+value.toFixed(2)
       }
   }
}
</script>
<style scoped>
    [v-cloak]{
        display:none;
    }
    *{
    	margin:0;
    	padding:0;
    }

    body{
    	font:15px/1.3 'Open Sans', sans-serif;
    	color: #5e5b64;
    	text-align:center;
    }

    a, a:visited {
    	outline:none;
    	color:#389dc1;
    }

    a:hover{
    	text-decoration:none;
    }

    section, footer, header, aside, nav{
    	display: block;
    }
     form{
    	background-color: #61a1bc;
    	border-radius: 2px;
    	box-shadow: 0 1px 1px #ccc;
    	width: 400px;
    	padding: 35px 60px;
    	margin: 50px auto;
    }

    form h1{
    	color:#fff;
    	font-size:64px;
    	font-family:'Cookie', cursive;
    	font-weight: normal;
    	line-height:1;
    	text-shadow:0 3px 0 rgba(0,0,0,0.1);
    }

    form ul{
    	list-style:none;
    	color:#fff;
    	font-size:20px;
    	font-weight:bold;
    	text-align: left;
    	margin:20px 0 15px;
    }

    form ul li{
    	padding:20px 30px;
    	background-color:#8ec16d;;
    	margin-bottom:8px;
    	box-shadow:0 1px 1px rgba(0,0,0,0.1);
    	cursor:pointer;
    }

    form ul li span{
    	float:right;
    }

    form ul li.active{
    	background-color:#e53885
    }

    div.total{
    	border-top:1px solid rgba(255,255,255,0.5);
    	padding:15px 30px;
    	font-size:20px;
    	font-weight:bold;
    	text-align: left;
    	color:#fff;
    }

    div.total span{
    	float:right;
    }
</style>