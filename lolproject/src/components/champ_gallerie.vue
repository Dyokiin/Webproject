<template>
  <div class="ChampGallerie"> 
	<ChampCard
  v-for="champion in champs_data"
    :key="champion.key"
    :name="champion.name" 
    :id="champion.id" 
    @click.native="selected_champ_data(chapion, $event)"
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
      champs_data: [],
      search: String,
      is_champ_clicked: Boolean
    }
  },
  created: function() {
    this.retrieve_champ_data()
    console.log(this.dhamps_data)
  },
  computed: {
		champ_data_sorted: function() {
      const filterFunc = (champion) => champion.displayName.toLowerCase().includes(this.search.toLowerCase())
      let data = this.dataTab.filter(filterFunc)
      if(this.champ_category!=''){data = data.filter(champion => champion.role.displayName == this.champ_category)}
      return data
		},
    nb_of_champ: function() {
      const filterFunc = (champion) => champion.displayName.toLowerCase().includes(this.search.toLowerCase())
      let data = this.dataTab.filter(filterFunc)
      if(this.champ_category!=''){data = data.filter(champion => champion.role.displayName == this.champ_category)}
      let nb = 0
      for(let i = 0; i < data.length; i++){
        nb+=1
      }
      if (nb ==0) nb = "No champion"
      else nb = nb + " champions"
      return nb
    }
	},
  methods: {
		async retrieve_champ_data() {
      this.dataT = await getChampData()
      this.champs_data = this.dataT.data
    },
    selected_champ_data: function(selected_champ) {
      this.$emit('update:is_champ_clicked',true)
      this.$emit('update:champ_sel',selected_champ)
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