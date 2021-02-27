<template>
  <b-card-group columns>
    <OverlayImageCard v-for="item in this.$store.state.recipes[0]" v-bind:key="item.recipeImage" :recipe="item"/>
  </b-card-group>
</template>

<script>
import OverlayImageCard from "@/components/OverlayImageCard";
export default {
  name: "Search",
  components: {OverlayImageCard},
  data(){
    return{
      imgs: [],
    }
  },
}
</script>

<style scoped>

</style>
