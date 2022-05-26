<template>
  <div class="ChampCard">
    <img class="picture" :src="pic_url"/>
    <div>
      <h2 class="name"> {{name}}</h2>
    </div>  
  </div>
</template>

<script>
export default {
	name: 'ChampCard',
	props: {
		name: String,
		id: String
	},
	created: function() {
		this.pic_url = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + this.id + "_0.jpg";
	}
}
</script>

<style scoped>
	.ChampCard {
		width:150px;
	}
	.picture{
		width:150px;
	}
	h2 {
		font-size: 20px;
	}
	.ChampCard:hover {
		transform: scale(0.95);
		cursor: pointer;
	}

</style>