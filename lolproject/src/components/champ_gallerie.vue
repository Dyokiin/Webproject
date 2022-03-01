<template>
  <div class="champ-gallery">
	<h1>{{ msg }}</h1>
    <h3>Installed CLI Plugins</h3>

    <h3>Essential Links</h3>

    <h3>Ecosystem</h3>

	<ChampCard/>
  </div>
</template>

<script>
import ChampCard from './champ_card'

export default {
  name: 'ChampGallerie',
  data () {
	return {
		champs_data: []
	}
  },
  created: function() {
	this.retrieve_champ_data()
  },
  methods: {
		async retrieve_champ_data() {
	}
  },
	components: {
		ChampCard
	}
}
</script>

<style scoped>
h3 {

}
</style>