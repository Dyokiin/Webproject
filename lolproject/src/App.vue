<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/index.jpeg">
    <ChampGallerie/>
  </div>
</template>

<script>
import ChampGallerie from './components/champ_gallerie'

export default {
  name: 'App',
  components: {
    ChampGallerie
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
