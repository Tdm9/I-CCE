<template>
  <div v-cloak>
    <b-spinner v-show="!loaded" class="m-5" label="Busy"></b-spinner>
    <b-card-group columns v-show="loaded">
      <OverlayImageCard v-for="(item,idx) in data[currentPage-1]" v-bind:key="item.recipeImage+idx" :recipe="item"/>
    </b-card-group>
    <b-pagination v-model="currentPage" :total-rows="(data.length)*perPage" :per-page="perPage" first-text="⏮" prev-text="⏪" next-text="⏩" last-text="⏭" class="mt-4"/>
  </div>
    <!--b-spinner :v-show="!loaded" class="m-5" label="Busy"></b-spinner-->
</template>

<script>
import OverlayImageCard from "@/components/OverlayImageCard";
import {chunk} from 'lodash'
export default {
  name: "RecipeTypeViewer",
  data(){
    return{
      data: [],
      perPage: 50,
      currentPage: 1,
      loaded:false,
    }
  },
  methods: {
    chunk,
  },
  components: {OverlayImageCard},
  mounted() {
    const waitForStore =setInterval(()=>{
      if (this.$store.state.recipesOrderedByType[this.$route.params.type]){
        clearInterval(waitForStore);
        console.log('store ready')
        this.data=this.$store.state.recipesOrderedByType[this.$route.params.type];
      }
    },500);
  },
  watch: {
    data() {
      this.loaded = true;
    },
    currentPage() {
      const that = this;
      this.loaded = false;
      setTimeout(() => {
        that.loaded = true
      }, 500);
    },
  },

};
</script>

<style scoped>
</style>
