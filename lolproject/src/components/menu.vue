<template>
  <div class="Menu">
    <img id ="logo" alt="lologo" src="../assets/lologo.png" >
    <ul>
      <li class = "item">
        Home
      </li>
      <li class = "item">
        Recherche
      </li>
      <li class = "item">
        Test
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Menu',
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
      console.log('MDR')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo{
  margin: 5px ;
  height : 30px;
  mix-blend-mode: normal;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) grayscale(100%) brightness(5);
  transition: 300ms ease-out;
}
#logo:hover{
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor:pointer;
}
.Menu{
  font-family: "Helvetica";
  font-size: 58px;
  background-color: #084C61;
  border-bottom: 5px solid #F0544F;
  background-blend-mode: hard-light;
  color: rgba(255, 255, 255, 0.82);
  display: flex;
  justify-content: left;
  height: 5%;
  width: 100%;
  z-index: 3;
  opacity: 100%;
  position: absolute;
}
li{
  font-size: 22px;
  list-style: none;
  margin: 15px 0px;
}
.item{
  font-size: 15px;
  margin: 10% 20%;
  transition: 400ms ease-out;
}
.item:hover{
  color: #ffe985;
  cursor:pointer;
}
ul{
  display: flex;
  margin-right: 15%;
}
</style>