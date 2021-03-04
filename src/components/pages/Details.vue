<template>
  <div>
    <b-card  border-variant="primary" :header="recipe.name" header-bg-variant="primary" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item>Active</b-nav-item>
          <b-nav-item>Inactive</b-nav-item>
          <b-nav-item>Disabled</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body>
        <b-img :thumbnail="true" :center="true" :src="recipe.recipeImage==noPreviewImage?alternativeImage:recipe.recipeImage"/>
        <b-col sm="3">
          <b-list-group>
            <b-list-group-item variant="info">Cooking Steps</b-list-group-item>

            <b-list-group-item button v-for="item in recipe.cookingSteps" v-bind:key="item">{{ item }}</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col sm="3">
          <b-list-group>
            <b-list-group-item variant="info">Comments</b-list-group-item>
            <b-list-group-item button v-for="item in recipe.comments" v-bind:key="item">{{ item }}</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-row>
        <b-col sm="3">
          <b-list-group>
            <b-list-group-item variant="info">Ingredients</b-list-group-item>
            <b-list-group-item button v-for="item in recipe.ingredients" v-bind:key="item">{{ item }}</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col sm="8">
          <b-form inline>
            <b-form-group>
              <label for="creator" alignSelf="flex-start">User ID</label>
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
        </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: {
    recipe:Object,
  },
}
</script>

<style scoped>

</style>
