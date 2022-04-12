<template>
  <div class="champ-gallery">
	<ChampCard
  v-for="champion in dataT"
    :key="champion.data.key"
    :name="champion.data.name" 
    :bustPortrait="champion.data.image.full"
  />
  </div>
</template>

<script>
import ChampCard from './champ_card'
import getChampData from '../api/lolAPI.js'
getChampData()

export default {
  name: 'ChampGallerie',
  data () {
    return {
      dataT: [],
      champs_data: []
    }
  },
  created: function() {
    this.retrieve_champ_data()
  },
  methods: {
		async retrieve_champ_data() {
      this.dataT = await getChampData()
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