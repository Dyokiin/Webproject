<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/index.jpeg">
    <TitlePage/>
    <ChampGallerie/>
  </div>
</template>

<script>
import ChampGallerie from './components/champ_gallerie'
import TitlePage from './components/title_page'

export default {
  name: 'App',
  components: {
    TitlePage,
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
