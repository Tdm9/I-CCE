<template>
    <b-card overlay :img-src="recipe.recipeImage" img-alt="Card Image" text-variant="white" :title="recipe.name" :sub-title="recipe.cookTime">

      <b-card-text>
        Dosage: {{recipe.dosage}} people
      </b-card-text>
      <b-button id="show-btn" @click="showModal">Open Modal</b-button>


      <b-modal ref="my-modal" :title="recipe.name">
        <b-img :thumbnail="true" class="h-50 w-50" :center="true" :src="recipe.recipeImage"/>

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
      </b-modal>
    </b-card>
</template>

<script>
export default {
  name: "OverlayImageCard",
  props: {
    recipe:Object
  },
  data() {
    return {
      busy: false,
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
  }
}
</script>

<style scoped>

</style>
