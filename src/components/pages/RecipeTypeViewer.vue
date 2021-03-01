<template>
  <div v-cloak>
    <b-spinner v-show="!loaded" class="m-5" label="Busy"></b-spinner>
    <b-card-group columns v-show="loaded">
      <OverlayImageCard v-for="(item,idx) in $store.state.recipesOrderedByType[$route.params.type]" v-bind:key="item.recipeImage+idx" :recipe="item"/>

    </b-card-group>
    </div>
    <!--b-spinner :v-show="!loaded" class="m-5" label="Busy"></b-spinner-->
</template>

<script>
import OverlayImageCard from "@/components/OverlayImageCard";

export default {
  name: "RecipeTypeViewer",
  data(){
    return{
      loaded:false,
    }
  },
  components: {OverlayImageCard},
  mounted() {
    //500  -- 115/72 items - panela
    //2000-- 195 -compota
    //2000 -- 443 items - carne
    //4000 -- 912 items - sobremesas
    console.log('mounted initiated(',Date.now())
    const waitForStore =setInterval(()=>{
      if (!this.$store.state.recipesOrderedByType[this.$route.params.type]){
        console.log('no store :(',Date.now())
      }else {
        clearInterval(waitForStore);
        console.log('there is store',Date.now())
        setTimeout(()=>{
          this.loaded=true;
          console.log('loading Page',Date.now())
          },this.$store.state.recipesOrderedByType[this.$route.params.type].length*7);
      }
    },5000)
  },
  methods: {
  },
};
</script>

<style scoped>
.esconde{
  display:none;
}
.mostra{
  display:block;
}
</style>
