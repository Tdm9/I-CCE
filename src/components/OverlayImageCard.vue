<template>
    <b-card v-once overlay :img-src="recipe.recipeImage===noPreviewImage?alternativeImage:recipe.recipeImage"
            text-variant="white" :title="recipe.name" :sub-title="recipe.cookTime" style=" display: inline-block">

      <b-card-text>
        Dosage: {{recipe.dosage}} people
      </b-card-text>
      <b-button id="show-btn" @click="showModal">Open Modal</b-button>


      <b-modal ref="my-modal" :title="recipe.name">
        <b-img :thumbnail="true" class="h-50 w-50" :center="true" :src="recipe.recipeImage==noPreviewImage?alternativeImage:recipe.recipeImage"/>

        <b-form-group label="Difficulty:" label-for="nested-state" label-cols-sm="3" label-align-sm="right">
          <b-icon icon="star-fill" animation="fade" font-scale="2"/>
          <b-icon :icon="recipe.difficulty === 'Fácil'?'star':'star-fill'" animation="fade" font-scale="2"/>
          <b-icon :icon="recipe.difficulty === 'Difícil'?'star-fill':'star'" animation="fade" font-scale="2"/>
        </b-form-group>
        <b-form-group label="Creator:" label-for="nested-street" label-cols-sm="3" label-align-sm="right">
          <b-form-input disabled :value="recipe.creatorName"/>
        </b-form-group>

        <b-form-group label="Type:" label-for="nested-city" label-cols-sm="3" label-align-sm="right">
          <b-form-input disabled :value="recipe.type"/>
        </b-form-group>
        <b-form-group label="Cooking Time:" label-for="nested-country" label-cols-sm="3" label-align-sm="right">
          <b-form-input disabled :value="recipe.cookTime"/>
        </b-form-group>

        <b-form-group label="Dosage:" label-cols-sm="3" label-align-sm="right" class="mb-0">
          <b-form-input disabled :value="recipe.dosage"/>
        </b-form-group>
        <b-icon icon="exclamation-circle-fill" variant="success" v-on:click="goToDetails"></b-icon>

      </b-modal>
    </b-card>
</template>

<script>
export default {
  name: "OverlayImageCard",
  props: {
    recipe:Object,
  },
  data() {
    return {
      loaded:false,
      noPreviewImage:"https://receitas.moulinex.pt/companion/images/default-image-1140.jpg",
      alternativeImage: "https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg",
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    goToDetails(){
      this.$router.push({
        name: 'details',
        params: {
          recipe:this.$props.recipe,
        }
      })
    }
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}

</style>
