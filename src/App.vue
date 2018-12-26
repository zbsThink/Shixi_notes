<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Tab1/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import La from './components/20181210-axios'
import Parent from './components/Parent'
import Tab from './components/Tab'
import Choose  from './components/Choose'
import Test  from './components/test'
import Tab1 from './components/Tab1'
export default {
  name: 'App',
  components: {
    HelloWorld,
    La,
    Parent,
    Tab,
    Tab1,
    Choose,
    Test
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
