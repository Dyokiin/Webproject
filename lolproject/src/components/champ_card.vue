<template>
  <div class="ChampCard">
    <img class="picture" :src="pic_url"/>
    <div>
      <h2 class="firstname"> {{name}}</h2>
      <p class="breed">{{type}}</p>
    </div>  
  </div>
</template>

<script>
	export default {
		name: 'ChampCard',
		props: {
			name: {type: String, required: true, default: "Aatrox"},
			type: {type: String, default: "Fighter"}, 
			pic_url: {tpye: String, default: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"}
		}
	}
</script>

<style scoped>
	.ChampCard {
		height:200px;
		width:150px;
		display: flex;
	}
	img {
		height: 10%;
		width: 10%;
	}
	h2 {
		font-size: 20px;
	}

</style>