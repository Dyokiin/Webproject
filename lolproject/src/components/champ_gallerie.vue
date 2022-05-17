<template>
  <div class="ChampGallerie"> 
	<ChampCard
  v-for="champion in champs_data"
    :key="champion.key"
    :name="champion.name" 
    :id="champion.id" 
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
    console.log(this.dhamps_data)
  },
  methods: {
		async retrieve_champ_data() {
      this.dataT = await getChampData()
      this.champs_data = this.dataT.data
    }
  },
	components: {
    ChampCard,
	}
}
</script>

<style scoped>
  .ChampGallerie {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

</style>