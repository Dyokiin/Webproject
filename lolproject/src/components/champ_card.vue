<template>
  <div class="ChampCard">
    <img class="picture" :src="pic_url"/>
    <div>
      <h2 class="name"> {{name}}</h2>
      <p class="type">{{type}}</p>
    </div>  
  </div>
</template>

<script>
	export default {
		name: 'ChampCard',
		props: {
			name: String,
			type: String, 
			pic_url: String
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