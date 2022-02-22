<template>
  <div class="champ-card">
    <img class="picture" src="https://my-best-kennel.com/pictures/45.png"/>
    <div>
      <h2 class="firstname">Pluto</h2>
      <p class="breed">Saint-Hubert</p>
    </div>  
  </div>
</template>

<script>
	export default {
	  name: 'champ-card'
	}
</script>

<style>
	.champ-card {
	  display: flex;
	}

	h2 {
		 font-size: 20px;
	}
</style>