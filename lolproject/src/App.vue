<template>
  <div id="app">
    <Menu id='menu'/>
    <!-- <img alt="Vue logo" src="./assets/index.jpeg"> -->
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Menu from './components/menu.vue'
import Content from './components/content.vue'
import Footer from './components/better_footer.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Content,
    Footer
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #373F4B;
  width: 100%;
  min-height: 100vh;
}

</style>
