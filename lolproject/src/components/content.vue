<template>
  <div class="Content">
    <ul>
      <h1>
        LEAGUE OF COMPREHENDS
      </h1>
      <h2>
        Latest news on champs and patchs
      </h2>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </h3>
    </ul>
    <ChampGallerie/>
  </div>
</template>

<script>
import ChampGallerie from './champ_gallerie'

export default {
  name: 'Content',
  props: {
    msg: String
  },
  data(){
    return {
      dataTab: []
    }
  },
  methods: {
    doStuff(){
      console.log('xD')
    }
  },
  components: {
    ChampGallerie
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  text-align: left;
  font-family: "Raleway";
  font-size: 96px;
}
h2{
  font-family: "Poppins";
  font-size: 40px;
}
h1{
  font-size: 36px;
}
</style>