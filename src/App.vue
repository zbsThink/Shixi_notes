<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Choose/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import La from './components/20181210-axios'
import Parent from './components/Parent'
import Tab from './components/Tab'
import Choose  from './components/Choose'
export default {
  name: 'App',
  components: {
    HelloWorld,
    La,
    Parent,
    Tab,
    Choose
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
}
</style>
