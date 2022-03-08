<template>
  <div class="champ-gallery">
	<h1>{{ msg }}</h1>
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
    ChampCard,
	}
}
</script>

<style scoped>
  .ChampGallerie {
    display: flex;
    justify-content: center;
  }

</style>