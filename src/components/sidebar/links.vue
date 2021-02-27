<template>
  <router-link class="link" :to="link">
    <b-collapse id="collapse-1"><h2>{{displayText}}</h2></b-collapse>
  </router-link>
</template>

<script>
export default {
  name: "links",
  props: ['displayText','link']
}
</script>

<style scoped>

</style>
