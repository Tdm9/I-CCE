<template>
  <b-card-group columns>
    <OverlayImageCard :v-if="loaded===true" v-for="item in $store.state.recipesOrderedByType[$route.params.type]" v-bind:key="item.recipeImage" :recipe="item"></OverlayImageCard>
    <b-spinner :v-else-if="!loaded" class="m-5" label="Busy"></b-spinner>
  </b-card-group>
</template>

<script>
import OverlayImageCard from "@/components/OverlayImageCard";

export default {
  name: "RecipeTypeViewer",
  data(){
    return{
      loaded:false
    }
  },
  components: {OverlayImageCard},
  methods: {
    updateMessageArray() {
      this.loaded=false
      //runs after v-for is finnished
      this.$nextTick(() => {
        this.loaded=true
      })
    }
  }
}
</script>

<style scoped>

</style>
