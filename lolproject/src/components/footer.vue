<template>
  <div class="Content">
    <ul>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </h2>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </h3>
    </ul>
    <ChampGallerie/>
  </div>
</template>

<script>
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
      console.log('LOL')
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Content{
  margin-top : 60px;
  margin-left: 20px;
}

h3{
  text-align: left;
  font-family: "Poppins";
  font-size: 1  6px;
  width: 50%;
}
h2{
  text-align: left;
  font-size: 30px;
  margin-bottom: 30px;
}
h1{
  text-align: left;
  font-family: "Raleway";
  font-size: 66px;
}
</style>