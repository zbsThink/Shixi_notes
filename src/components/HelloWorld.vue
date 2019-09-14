<template>
    <div>
      <el-upload :file-list="fileList"  :on-success="handleSuccess" action="https://jsonplaceholder.typicode.com/posts/" multiple :limit="3">
       <el-button type="primary" size="small">点击上传</el-button>
       <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      fileList:[]
    }
  },
  methods:{
    handleSuccess(res,file,filelist){
       console.log('我执行了')
       console.log(file.url)
    },
    //  beforeRemove(file, fileList) {
    //     console.log(file)
    //     return this.$confirm(`确定移除 ${ file.name }？`);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
