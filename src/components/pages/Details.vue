<template>
  <div>
    <b-card class="text-white" border-variant="primary" :header="recipe.name" header-bg-variant="primary" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item v-on:click="loaded = 'cookingData'">Cooking Data</b-nav-item>
          <b-nav-item v-on:click="loaded = 'display'">Display Info</b-nav-item>
          <b-nav-item v-show="recipe.comments.length>0" v-on:click="loaded = 'comments'">Comments</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="text-black-50">
        <b-row>
          <b-col sm="4" v-show="loaded==='display'">
            <b-img :thumbnail="true" :center="true" :src="recipe.recipeImage==noPreviewImage?alternativeImage:recipe.recipeImage"/>
          </b-col>
          <b-col sm="8" v-show="loaded==='display'">
            <RecipeDisplayData :recipe="recipe"/>
          </b-col>
        </b-row>
        <b-col sm="12" v-show="loaded==='comments'">
          <b-list-group>
            <b-list-group-item variant="info">Comments</b-list-group-item>
            <b-list-group-item button v-for="item in recipe.comments" v-bind:key="item">{{ item.comment }}</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-row>
          <b-col sm="3" v-show="loaded==='cookingData'">
            <b-list-group>
              <b-list-group-item variant="info">Ingredients</b-list-group-item>
              <b-list-group-item button v-for="item in recipe.ingredients" v-bind:key="item">{{ item }}</b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col sm="9" v-show="loaded==='cookingData'">
            <b-list-group>
              <b-list-group-item variant="info">Cooking Steps</b-list-group-item>

              <b-list-group-item button v-for="item in recipe.cookingSteps" v-bind:key="item">{{ item }}</b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import RecipeDisplayData from "@/components/cardComponents/RecipeDisplayData";
export default {
  name: "Details",
  components : {RecipeDisplayData},
  props: {
    recipe:Object,
  },
  data(){
    return{
      loaded:'cookingData',
    }
  },
}
</script>

<style scoped>

</style>
