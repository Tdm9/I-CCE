<template>
  <b-card-group columns>
    <div>
      <b-form-input v-model="text" placeholder="Search..."></b-form-input>
      <br/>
    </div>
    <div>
      <OverlayImageCard v-for="item in data[currentPage-1]" v-bind:key="item.recipeImage" :recipe="item"/>
    </div>
    <b-pagination v-model="currentPage" :total-rows="(data.length)*perPage" :per-page="perPage" first-text="⏮" prev-text="⏪" next-text="⏩" last-text="⏭" class="mt-4"/>

  </b-card-group>
</template>

<script>
import OverlayImageCard from "@/components/OverlayImageCard";
import {chunk} from 'lodash';

export default {
  name: "Search",
  components: {OverlayImageCard},
  data(){
    return{
      text: '',
      data: [],
      imgs: [],
      perPage: 14,
      currentPage: 1,
    }
  },
  mounted() {
    const waitForStore =setInterval(()=>{
      if (this.$store.state.rawRecipes){
        clearInterval(waitForStore);
        console.log('store ready')
        this.data=chunk(this.$store.state.rawRecipes,this.perPage);
      }
    },500);
  },
  watch: {
    text() {
      this.data = chunk(this.$store.state.rawRecipes.filter(this.filterFunc),this.perPage);
    },
  },
  methods: {
    filterFunc(item) {
      return this.text===''?true:item.name.includes(this.text)
    }
  },
}
</script>

<style scoped>

</style>
