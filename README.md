### 目录
1. 20181210-axios.vue 通过axios获取数据
2. Log.vue和Parent.vue 模拟点击加入购物车，出现已加入购物车提示
3. Tab.vue 实现tab选项卡功能（只有两个选项卡）
4. Tab1.vue 实现tab选项卡功能（有两个选项卡）
5. Choose.vue 实现选中与取消功能 选中更换图片，取消又是另一张图片
6. JSON.stringify()
   1.js对象=>json对象（字符串类型）
   2.json对象=>json对象（字符串类型）
7. JSON.parse()
   1.json对象(字符串)=>js对象
8. vue中的created()在页面渲染成html前调用，即通常初始化某些属性值，然后在渲染成视图
   vue中的mounted()在页面渲染成html后调用，再对html的dom节点进行一些需要的操作
9. vue-cli 引入css报错解决办法：
    在webpack.base.conf.js中进行配置添加如下代码
    ```
    {
        test:/\.css$/,
        include: [ 
          /src/,//表示在src目录下的css需要编译 
          '/node_modules/swiper/dist/'  //增加此项 
         ], 
         loader: 'style-loader!css-loader'
      }
    ```
    如果你的css文件是在src目录下就加上src路径，如上面代码element-ui或者mint-ui，如果你的css文件在其他目录下原理也是一样

10. demo.vue 一个订单列表也可以说是一个简易购物车，主要是其中对于`active`属性的运用
11. demo1.vue 实现搜索功能