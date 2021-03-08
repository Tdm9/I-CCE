<template>
  <b-form inline>
    <b-form-group>
      <label for="creator" alignSelf="flex-start">User Name</label>
      <b-form-input v-model="recipe.creatorName" disabled id="creator"/>
    </b-form-group>
    <b-form-group>
      <label for="id">User ID</label>
      <b-form-input v-model="recipe._id" disabled id="id"/>
    </b-form-group>
    <b-form-group>
      <label for="difficulty">Difficulty</label>
      <b-form-input v-model="recipe.difficulty" disabled id="difficulty"/>
    </b-form-group>
    <b-form-group>
      <label for="type">Type</label>
      <b-form-input v-model="recipe.type" disabled id="type"/>
    </b-form-group>
    <b-form-group>
      <label for="cookTime">CookTime</label>
      <b-form-input v-model="recipe.cookTime" disabled id="cookTime"/>
    </b-form-group>
    <b-form-group>
      <label for="dosage">Dosage</label>
      <b-form-input v-model="recipe.dosage" disabled id="dosage"/>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: "RecipeDisplayData",
  props: {
    recipe:Object,
  },
}
</script>

<style scoped>

</style>
