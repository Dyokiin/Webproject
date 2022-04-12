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
    <div class="Rectangle1"></div>
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
.Content{
  margin-top : 60px;
}
.Rectangle1{
  position: absolute;
  width: 1970px;
  height: 37px;
  left: 323px;
  /* top: 2026px; */

  background-color: #F9C914;
  transform: rotate(-90deg);
}
h3{
  text-align: left;
  font-family: "Poppins";
  font-size: 16px;
  width: 50%;
  background-color: #084C61;
  padding: 30px;
}
h2{
  text-align: left;
  font-size: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
}
h1{
  text-align: left;
  font-family: "Raleway";
  font-size: 66px;
  margin-left: 20px;
}
</style>